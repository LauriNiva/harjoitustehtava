import { useState } from 'react';
import { deleteUser } from '../services/users';

export default function UserCard({ user, users, setUsers }) {
  const [visible, setVisible] = useState(false);

  const handleDeleteUser = async () => {
    if (
      window.confirm(`Are you sure you want to delete user ${user.username}?`)
    ) {
      // await deleteUser();
      setUsers(users.filter((u) => u.id !== user.id));
    }
  };

  return (
    <div className="m-2 p-4 rounded-md bg-indigo-800">
      <button className="w-full" onClick={() => setVisible(!visible)}>
        <div className="flex justify-between">
          <h3 className="font-semibold text-xl">{user.username}</h3>
          <p className="text-2xl font-bold">{visible ? '-' : '+'}</p>
        </div>
      </button>
      {visible && (
        <div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-indigo-700 p-2 rounded-md h-full">
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>
                Website:
                <a
                  className="underline text-emerald-200"
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  {user.website}
                </a>
              </p>
            </div>
            <div className="bg-indigo-700 p-2 rounded-md h-full">
              <h5>Address</h5>
              <p>Street: {user.address.street}</p>
              <p>Suite: {user.address.suite}</p>
              <p>City: {user.address.city}</p>
              <p>Zipcode: {user.address.zipcode}</p>
            </div>
            <div className="bg-indigo-700 p-2 rounded-md h-full">
              <h5>Company info</h5>
              <p className="text-2xl font-bold">{user.company.name}</p>
              <p className="text-xl">{user.company.catchPhrase}</p>
              <p className="text-lg font-light">{user.company.bs}</p>
            </div>
          </div>
          <div className="flex justify-end">
            {visible && (
              <button
                onClick={handleDeleteUser}
                className="border-2 mt-2 p-1 rounded-sm hover:bg-pink-600 font-semibold"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
