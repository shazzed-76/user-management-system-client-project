import { Link, useNavigate } from "react-router";
import React, { use } from "react";
import { FaUser } from "react-icons/fa";
import { UsersContext } from "../Contexts/UsersProveder";
import Loading from "./Loading";
import Swal from "sweetalert2";

const Users = () => {
  const { users, loading, setStatus } = use(UsersContext);
  const navigate = useNavigate();
  console.log(setStatus)
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete specific data from database using id
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setStatus(true)
            if(data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "User data has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
     
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Link
        className="btn bg-white shadow-sm mb-5 text-[#5205e0]"
        to="/add-user"
      >
        New User <FaUser color="#5205e0" />
      </Link>
      <div className="overflow-x-auto border border-base-content/5 bg-base-100 h-fit">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                className="transition duration-500 hover:bg-gray-200 "
                key={user?._id}
              >
                <th>{index + 1}</th>
                <td>{user?.userName}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.status}</td>
                <td className="space-x-2">
                  <span
                    onClick={() =>
                      navigate("/edit-user-info", { state: { id: user?._id } })
                    }
                    className="btn btn-xs"
                  >
                    edit
                  </span>
                  <span
                   onClick={() => handleDeleteUser(user?._id)}
                   className="btn btn-xs"
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
