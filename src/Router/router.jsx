import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Components/MainLayout';
import Users from '../Components/Users';
import AddUserForm from '../Components/AddUserForm';
import EditUserInfo from '../Components/EditUserInfo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Users />,
      },

      {
        path: "add-user",
        element: <AddUserForm />,
      },
      {
        path: "edit-user-info",
        element: <EditUserInfo />
      },
    ],
  },
]);

export default router;