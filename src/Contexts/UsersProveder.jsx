import React, { createContext, useEffect, useState } from 'react';

export const UsersContext = createContext();


const UsersProveder = ({children}) => {
    const [ users, setUsers ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ status, setStatus ] = useState(false);
    const [ search, setSearch ] = useState('');
    // console.log(status)
    const fetchUsers = async() => {
        try{
            const res = await fetch(
              `https://user-management-system-server-ten.vercel.app/users?searchParams=${search}`
            );
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
    }, [status, search])

    return (
        <UsersContext value={{users, loading, setStatus, setSearch}}>
            {children}
        </UsersContext>
    );
};

export default UsersProveder;