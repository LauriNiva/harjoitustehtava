import { v4 as uuidv4 } from 'uuid';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error(
        `Error while fetching users: ${res.status} ${res.statusText}`
      );
    }
    const data = await res.json();
    return { data };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

const addUser = async (userToAdd) => {
  try {
    const serverSideUserId = uuidv4();
    const data = { ...userToAdd, id: serverSideUserId };
    return {data};
  } catch (error) {
    console.log(error);
    return {error};
  }
  
};

const deleteUser = () => {
  return;
};

export { getUsers, addUser, deleteUser };
