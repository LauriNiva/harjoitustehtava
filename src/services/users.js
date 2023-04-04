const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
}

const addUser = () => {

}

const deleteUser = () => {

}

export { getUsers, addUser, deleteUser }