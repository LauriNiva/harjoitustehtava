import { useEffect, useState } from 'react';
import './styles.css';

/**
 *  ///// KÄYTTÄJIEN HALLINTAPANEELI /////
 *
 *
 * - Hae lista käyttäjistä rajapinnasta: https://jsonplaceholder.typicode.com/users
 *
 * Ominaisuudet:
 *
 * - Käyttäjien listaus
 * - Uuden käyttäjän lisäys lomakkeella
 * - Käyttäjän poisto
 * - Käyttöliittymän ei tarvitse olla graafisesti näyttävä mutta sen olisi hyvä olla responsiivinen
 *
 * Tehtävää tehdessä on tärkeää miettiä miten toiminnallisuuksien tulisi toimia hyvin suunnitellussa sovelluksessa.
 * Tärkeintä ei ole se että kaikki ominaisuudet on toteutettu vaan se että toteutus toimii ja on laadukas.
 *
 * Huom! Käyttäjät haetaan rajapinnasta, mutta sen lisäksi ei ole tarvetta tehdä api kutsuja
 *
 * Kun olet tehnyt tehtävän, palauta linkki siihen sähköpostilla osoitteeseen: juhana.jauhiainen@codemen.fi. Linkin saa oikeasta yläkulmasta (Share->Copy Sandbox link)
 *
 */

// type FetchedUserType = {
//   id: number,
//   name: string,
//   username: string,
//   email: string,
//   address: {
//     street: string,
//     suite: string,
//     city: string,
//     zipcode: string,
//     geo: {
//       lat: string,
//       lng: string
//     }
//   },
//   phone: string,
//   website: string,
//   company: {
//     name: string,
//     catchPhrase: string,
//     bs: string
//   }
// }

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="bg-indigo-600 p-2">
      {users
        ? users.map((user) => <UserCard key={user.id} user={user} />)
        : 'Loading...'}
    </div>
  );
}

function UserCard({ user }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="m-2 p-4 rounded-md bg-indigo-800 text-neutral-200">
        <button className='w-full' onClick={() => setVisible(!visible)}>
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">{user.username}</h3>
        <p className='text-2xl font-bold'>
           {visible ? '-' : '+'}
          </p> 
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
            <p className='text-2xl font-bold'>{user.company.name}</p>
            <p className='text-xl'>{user.company.catchPhrase}</p>
            <p className='text-lg font-light'>{user.company.bs}</p>
          </div>
        </div>
      )}
    </div>
  );
}
