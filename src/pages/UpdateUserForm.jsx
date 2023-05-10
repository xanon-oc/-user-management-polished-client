import React, { useState } from "react";
import Header from "../components/Header";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const UpdateUserForm = () => {
  const [gender, setGender] = useState("male");
  const [active, setActive] = useState("active");
  const notify = () => toast.success("Existing user has been updated.");
  const user = useLoaderData();
  const { _id, name, email, photo } = user;
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleActiveChange = (event) => {
    setActive(event.target.value);
  };
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const genderData = gender;
    const activeData = active;
    const updatedUser = { name, email, photo, genderData, activeData };
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then(() => {
        notify();
      });
  };
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Header />
      <div className="mt-10 w-1/2 mx-auto">
        <p className="text-center mb-8">Update Existing User</p>
        <form onSubmit={handleFormData}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              defaultValue={email}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Photo-URL
            </label>
          </div>
          {/* buttons */}
          <div>
            <p className="mb-2">Please select user gender</p>
            <div className="flex items-center gap-4">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  id="maleOption"
                  name="genderOption"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="maleOption">Male</label>
              </div>
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  id="femaleOption"
                  name="genderOption"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="femaleOption">Female</label>
              </div>
            </div>
            <p className="mb-2 mt-4">Please select user active status</p>
            <div className="flex items-center gap-4">
              <div className="flex gap-1 items-center">
                <input
                  type="radio"
                  id="onActive"
                  name="active"
                  value="active"
                  checked={active === "active"}
                  onChange={handleActiveChange}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="onActive">Active Member</label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="noActive"
                  name="active"
                  value="inactive"
                  checked={active === "inactive"}
                  onChange={handleActiveChange}
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="noActive">None-active Member</label>
              </div>
            </div>
          </div>
          {/* buttons end */}
          <button type="submit" className="btn-e border mt-4">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserForm;
