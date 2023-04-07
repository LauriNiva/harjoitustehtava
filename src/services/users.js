import axios from 'axios';

const BASE_URL = 'https://ht-backend.azurewebsites.net/api/users';

const getUsers = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const addUser = async (userToAdd) => {
  try {
    const { data } = await axios.post(BASE_URL, { newUserData: userToAdd });
    return { data };
  } catch (error) {
    console.log(error);
    if (error?.response?.data?.error?.code === 11000) {
      return { error: { message: 'Username must be unique' } };
    }
    return { error };
  }
};

const deleteUser = async (userId) => {
  try {
   const request = await axios.delete(`${BASE_URL}/${userId}`);
   return request;
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const editUser = async (userId, editedUser) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/${userId}`, {updatedUserData: editedUser});
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export { getUsers, addUser, deleteUser, editUser };
