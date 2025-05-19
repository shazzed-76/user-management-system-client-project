import React, { use } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router";
import Swal from "sweetalert2";
import { UsersContext } from "../Contexts/UsersProveder";

const EditUserInfo = () => {
  const { setStatus } = use(UsersContext);
  const location = useLocation();
  const id = location.state?.id;

  const handleEditUserInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // const email = formData.get("gender");
    const updatedInfo = Object.fromEntries(formData.entries());
    console.log(updatedInfo);

    // send the updated data in the database
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
            setStatus(true)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Updated successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <Link
        className="mb-5 btn border-none bg-transparent shadow-none text-[#5205e0]"
        to="/"
      >
        <FaArrowLeftLong /> All Users
      </Link>
      <form
        onSubmit={handleEditUserInfo}
        className="flex flex-col gap-5 max-w-lg w-full mx-auto"
      >
        <label className="input validator w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            required
            name="userName"
            placeholder="Username"
            //   pattern="[A-Za-z][A-Za-z0-9\-]*"
            //   minlength="3"
            //   maxlength="30"
            //   title="Only letters, numbers or dash"
          />
        </label>

        {/* Email */}
        <label className="input validator w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
          />
        </label>
        {/* Gender */}
        <div className="flex items-center gap-5">
          <label className="text-sm font-semibold text-gray-400">Gender</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                required
                className="radio radio-xs radio-primary"
              />
              <span>Male</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                required
                className="radio radio-xs radio-primary"
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-5">
          <label className="text-sm font-semibold text-gray-400">Status</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="Active"
                required
                className="radio radio-xs radio-primary"
              />
              <span>Active</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="status"
                value="Inactive"
                required
                className="radio radio-xs radio-primary"
              />
              <span>Inactive</span>
            </label>
          </div>
        </div>

        <button type="submit" className="btn w-full mt-5">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUserInfo;
