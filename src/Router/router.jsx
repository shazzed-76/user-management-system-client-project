import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Components/MainLayout';
import Users from '../Components/Users';
import AddUserForm from '../Components/AddUserForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            index: true,
            path: '/',
            element: <Users />
        },

        {
            path:'add-user',
            element: <AddUserForm />
        }
    ]
  },
]);

export default router;