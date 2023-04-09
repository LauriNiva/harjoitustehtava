import axios, { AxiosError } from 'axios';
import { NewUserType, UserType } from '../User.type';

//const BASE_URL = 'https://ht-backend.azurewebsites.net/api/users';
const BASE_URL = 'http://localhost:3001/api/users';

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
    return { data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error)
      return { error: error.response?.data.error };
    }
    return { error };
  }
};

const deleteUser = async (userId: string) => {
  try {
    const request = await axios.delete(`${BASE_URL}/${userId}`);
    return request;
  } catch (error) {
    console.log(error);
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
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export { getUsers, addUser, deleteUser, editUser };
