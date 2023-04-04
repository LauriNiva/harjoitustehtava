import { useState } from 'react';
import useForm from '../helpers/useForm';

export default function NewUserForm() {
  const [formVisible, setFormVisible] = useState(false);

  const { inputs, handleChange, clearForm } = useForm({
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: '',
    phone: '',
    website: '',
    companyName: '',
    catchPhrase: '',
    bs: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <button
        className="border-2 font-bold p-2 rounded-sm"
        onClick={() => setFormVisible(true)}
      >
        Add User
      </button>
      {formVisible && (
        <div className="absolute z-50 bg-slate-50 bg-opacity-80 top-0 left-0 w-full h-full">
          <div className="max-w-screen-lg m-auto">
            <div className="bg-indigo-700 my-2 p-3 rounded-md">
              Add new user
              <form className="user-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  <label>
                    Name
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Username
                    <input
                      required
                      type="text"
                      name="username"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Email
                    <input
                      required
                      type="text"
                      name="email"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Phone
                    <input
                      required
                      type="text"
                      name="phone"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Website
                    <input
                      required
                      type="text"
                      name="website"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className=" mt-4 pt-2 border-t-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  <label>
                    Street
                    <input
                      required
                      type="text"
                      name="street"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Suite
                    <input
                      required
                      type="text"
                      name="suite"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    City
                    <input
                      required
                      type="text"
                      name="city"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Zipcode
                    <input
                      required
                      type="text"
                      name="zipcode"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    lat
                    <input
                      required
                      type="text"
                      name="lat"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    lng
                    <input
                      required
                      type="text"
                      name="lng"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className=" mt-4 pt-2 border-t-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-4">
                  <label>
                    Company Name
                    <input
                      required
                      type="text"
                      name="companyName"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    CatchPhrase
                    <input
                      required
                      type="text"
                      name="catchPhrase"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    bs
                    <input
                      required
                      type="text"
                      name="bs"
                      placeholder=""
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="flex justify-between mt-5">
                  <button
                    onClick={() => {
                      setFormVisible(false);
                      clearForm();
                    }}
                    className="p-2 border-2 border-pink-400 rounded-sm font-bold text-pink-400"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="p-2 border-2 border-green-400 rounded-sm font-bold text-green-400"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
