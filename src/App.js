import { useEffect, useState } from 'react';
import './styles.css';
import UserCard from './components/UserCard';
import NewUserForm from './components/NewUserForm';

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
    <div className="bg-indigo-600 p-2 rounded-md text-neutral-200">
      <header className='flex justify-between p-3'>
        <h1 className='text-4xl font-black'>UserPanel</h1>
      <NewUserForm />
        
      </header>
      <div>
        {users
          ? users.map((user) => <UserCard key={user.id} user={user} />)
          : 'Loading...'}
      </div>
    </div>
  );
}

