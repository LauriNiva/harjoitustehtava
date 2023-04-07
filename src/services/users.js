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

export { getUsers, addUser, deleteUser };
