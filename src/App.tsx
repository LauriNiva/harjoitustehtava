import { useEffect, useState } from 'react';
import './styles.css';
import UserCard from './components/UserCard';
import NewUserForm from './components/NewUserForm';
import { getUsers } from './services/users';
import { UserType } from './User.type';

export default function App() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await getUsers();
      if (error && error instanceof Error) {
        setErrorMessage(error.message);
      }

      if (data) {
        setUsers(data);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-indigo-600 mt-0 xl:mt-3 p-2 rounded-md text-neutral-200">
      <header className="flex justify-between p-3">
        <h1 className="text-4xl font-black">UserPanel</h1>
        <NewUserForm users={users} setUsers={setUsers} />
      </header>
      <div>
        {errorMessage && <div className="font-bold">{errorMessage}</div>}
        {users
          ? users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                users={users}
                setUsers={setUsers}
              />
            ))
          : 'Loading...'}
      </div>
    </div>
  );
}
