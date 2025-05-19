import {Link} from 'react-router'
import React from 'react';
import { FaUser } from 'react-icons/fa';

const Users = () => {
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
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users;