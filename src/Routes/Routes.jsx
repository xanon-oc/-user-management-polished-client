import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddUserForm from "../pages/AddUserForm";
import UpdateUserForm from "../pages/updateUserForm";
import ViewUserDetails from "../pages/ViewUserDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "/addUserForm",
    element: <AddUserForm />,
  },
  {
    path: "/updateUserForm/:id",
    element: <UpdateUserForm />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
  {
    path: "/viewUserDetails/:id",
    element: <ViewUserDetails />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

export default routes;
