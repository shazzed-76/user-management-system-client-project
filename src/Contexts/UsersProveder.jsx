import React, { createContext, useEffect, useState } from 'react';

export const UsersContext = createContext();


const UsersProveder = ({children}) => {
    const [ users, setUsers ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ status, setStatus ] = useState(false);
    // console.log(status)
    const fetchUsers = async() => {
        try{
            const res = await fetch('http://localhost:3000/users');
            if(!res.ok){
                throw new Error(`Failed to fetch ${res.status}`)
            }

            const data = await res.json();
            setUsers(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
            setStatus(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [status])

    return (
        <UsersContext value={{users, loading, setStatus}}>
            {children}
        </UsersContext>
    );
};

export default UsersProveder;