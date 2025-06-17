import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin, companyToken } = useContext(AppContext);
  return (
    <div className="shadow py-4 bg-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img
          src={assets.logo}
          alt="Logo"
          onClick={(e) => {
            navigate("/");
          }}
          className="w-auto h-12 transition-transform cursor-pointer duration-300 hover:scale-105 hover:drop-shadow"
        />
        {user ? (
          <div className="flex items-center gap-3">
            <Link
              to={"/applications"}
              className="hover:text-blue-700 transition-colors duration-200 font-medium"
            >
              Applied Jobs
            </Link>
            <p className="text-gray-300">|</p>
            <p className="max-sm:hidden text-gray-700 font-medium">
              Hlo, {user.firstName + " " + user.lastName}
            </p>
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "ring-2 ring-blue-500 transition-all duration-200 hover:ring-purple-500",
                },
              }}
            />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            {!companyToken ? (
              <button
                className=" rounded-full p-2 hover:text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                onClick={(e) => setShowRecruiterLogin(true)}
              >
                Recruiter Login
              </button>
            ) : (
              <button
                className=" rounded-full p-2 hover:text-blue-700 hover:bg-blue-100 transition-colors duration-200"
                onClick={(e) => navigate("/dashboard/manage-job")}
              >
                Recruiter Page
              </button>
            )}
            <button
              className="bg-blue-700 text-white px-6 sm:px-9 py-2 rounded-full transition duration-200 hover:bg-blue-800 hover:scale-105 shadow"
              onClick={(e) => openSignIn()}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
