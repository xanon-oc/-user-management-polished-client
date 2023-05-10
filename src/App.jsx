import { useState } from "react";
import Header from "./components/Header";
import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const App = () => {
  const dataBaseData = useLoaderData();
  const [users, setUsers] = useState(dataBaseData);
  const notify = () => toast.error("User has been deleted.");
  const deleteHandler = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setUsers(users.filter((user) => user._id !== _id));
        notify();
      });
  };
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Header />
      <div className="mt-8 p-4">
        <div className="flex justify-between">
          <Link to="/addUserForm">
            <button type="button" className="btn-basic flex gap-1 items-center">
              New User
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </button>
          </Link>
          <div className="btn-basic flex gap-1 items-center">
            {users.length}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-8">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    ID
                  </th>

                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Action
                  </th>
                </tr>
              </thead>
              {users.map((user) => (
                <tbody key={user._id}>
                  <tr className="bg-blue-600 border-b border-blue-400">
                    <td className="px-6 py-4 flex items-center gap-4">
                      <img
                        className="w-12 h-12 object-cover rounded-full"
                        src={user?.photo}
                        alt=""
                      />
                      {user?.name}
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
                    >
                      {user?._id}
                    </th>

                    <td className="px-6 py-4 bg-blue-500">{user?.email}</td>
                    <td className="px-6 py-4">{user?.genderData}</td>
                    <td className="px-6 py-4 bg-blue-500">
                      <p className="font-medium text-white hover:underline">
                        {user?.activeData}
                      </p>
                    </td>
                    <td className="flex justify-center p-2 mt-2 bg-blue-600">
                      <div className="flex">
                        <Link to={`/viewUserDetails/${user._id}`}>
                          <button className="btn-e">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </button>
                        </Link>
                        <Link to={`/updateUserForm/${user._id}`}>
                          <button className="btn-e">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              />
                            </svg>
                          </button>
                        </Link>
                        <button
                          onClick={() => deleteHandler(user._id)}
                          className="btn-d"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
