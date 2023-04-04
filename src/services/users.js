import { v4 as uuidv4 } from 'uuid';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data;
};

const addUser = async (userToAdd) => {
  const serverSideUserId = uuidv4();
  const addedUser = { ...userToAdd, id: serverSideUserId };
  return addedUser;
};

const deleteUser = () => {
  return;
};

export { getUsers, addUser, deleteUser };
