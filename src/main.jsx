import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import UpdateCoffee from "./components/UpdateCoffee";
import AddCoffee from "./components/AddCoffee";
import Home from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch("http://localhost:3000/coffees"),
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
