import axios, { AxiosError } from 'axios';
import { NewUserType, UserType } from '../types/User.type';

const BASE_URL = 'https://ht-backend-ts.azurewebsites.net/api/users';
//const BASE_URL = 'https://ht-backend.azurewebsites.net/api/users';
//const BASE_URL = 'http://localhost:3001/api/users';

const getUsers = async () => {
  try {
    const { data }: { data: UserType[] } = await axios.get(BASE_URL);
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const addUser = async (userToAdd: NewUserType) => {
  try {
    const { data }: { data: UserType } = await axios.post(BASE_URL, {
      newUserData: userToAdd,
    });
    return { data, error: null };
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      return { data: null, error: error.response?.data.error };
    }
    if (error instanceof Error) {
      return { data: null, error: error.message };
    }
    return { data: null, error: null };
  }
};

const deleteUser = async (userId: string) => {
  try {
    await axios.delete(`${BASE_URL}/${userId}`);
    return { data: '' };
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      return { error: error.message };
    }
    return { error };
  }
};

const editUser = async (userId: string, editedUser: NewUserType) => {
  try {
    const { data }: { data: UserType | null } = await axios.patch(
      `${BASE_URL}/${userId}`,
      {
        updatedUserData: editedUser,
      }
    );
    return { data, error: '' };
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      return { data: null, error: error.message };
    }
    if (error instanceof Error) {
      return { data: null, error: error.message };
    }
    return { data: null, error: null };
  }
};

export { getUsers, addUser, deleteUser, editUser };
