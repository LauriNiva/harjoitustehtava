import { useState } from "react";

export default function UserCard({ user }) {
  const [visible, setVisible] = useState(false);

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
          <div className="bg-indigo-700 my-2 p-2 rounded-md">
            <h5>Address</h5>
            <p>Street: {user.address.street}</p>
            <p>Suite: {user.address.suite}</p>
            <p>City: {user.address.city}</p>
            <p>Zipcode: {user.address.zipcode}</p>
          </div>
          <div className="bg-indigo-700 p-2 rounded-md">
            <h5>Company info</h5>
            <p className="text-2xl font-bold">{user.company.name}</p>
            <p className="text-xl">{user.company.catchPhrase}</p>
            <p className="text-lg font-light">{user.company.bs}</p>
          </div>
        </div>
      )}
    </div>
  );
}
