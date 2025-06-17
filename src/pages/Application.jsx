import React, { useState, useRef, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";
import axios from "axios";

const Application = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  const fileInputRef = useRef(null);
  const { backendUrl, userData, userApplications, fetchUserData } =
    useContext(AppContext);
  const { getToken } = useAuth();

  const updateResume = async () => {
    try {
      const formData = new FormData();
      formData.append("resume", resume);
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + "/api/users/update-resume",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        await fetchUserData();
        toast.success("Resume updated successfully!");
      } else {
        toast.error(data.message || "Failed to update resume.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while updating resume.");
    }
    setIsEdit(false);
    setResume(null);
  };

  return (
    <>
      <Navbar />
      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
          <img src={assets.profile_upload_icon} alt="" className="w-7 h-7" />
          Your Resume
        </h2>

        <div className="flex gap-2 mb-8 mt-3">
          {isEdit || !userData?.resume ? (
            <>
              <label
                className="flex items-center cursor-pointer"
                htmlFor="resumeUpload"
              >
                <span
                  className={`${
                    resume
                      ? "bg-green-100 text-green-600 hover:bg-green-200"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  } px-4 py-2 rounded-lg mr-2 font-semibold transition`}
                >
                  {resume ? resume.name : "Select Resume"}
                </span>
                <input
                  type="file"
                  hidden
                  ref={fileInputRef}
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  id="resumeUpload"
                />
              </label>
              <button
                onClick={updateResume}
                className="bg-green-500 text-white border border-green-600 rounded-lg px-4 py-2 font-semibold hover:bg-green-600 transition"
              >
                Save
              </button>
              {resume && (
                <button
                  onClick={() => {
                    setResume(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="bg-red-100 text-red-600 border border-red-200 rounded-lg px-4 py-2 font-semibold hover:bg-red-200 transition"
                >
                  Remove Resume
                </button>
              )}
            </>
          ) : (
            <div className="flex gap-2 items-center">
              <a
                href={userData?.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-100 text-green-600 hover:bg-green-200 px-4 py-2 rounded-lg font-semibold transition flex items-center gap-2"
              >
               
                View Resume
              </a>
              <button
                className="text-blue-400 border border-blue-200 rounded-lg px-4 py-2 font-semibold hover:bg-blue-100 transition"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
              
            </div>
          )}
        </div>

        <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 01-8 0M12 14v7m-4 0h8"
            />
          </svg>
          Jobs Applied
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-lg bg-white/80 backdrop-blur-lg">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-3 px-4 border-b text-left font-semibold">
                  Company
                </th>
                <th className="py-3 px-4 border-b text-left font-semibold">
                  Job Title
                </th>
                <th className="py-3 px-4 border-b text-left max-sm:hidden font-semibold">
                  Location
                </th>
                <th className="py-3 px-4 border-b text-left max-sm:hidden font-semibold">
                  Date
                </th>
                <th className="py-3 px-4 border-b text-left font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {userApplications.map((job, index) => (
                <tr key={index} className="hover:bg-blue-50 transition group">
                  <td className="py-3 px-4 flex items-center gap-2 border-b">
                    <img
                      className="w-8 h-8 rounded shadow group-hover:scale-110 transition"
                      src={job.jobId.companyId.image}
                      alt=""
                    />
                    <span className="font-semibold">
                      {job.jobId.companyId.name}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">{job.jobId.title}</td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {job.jobId.location}
                  </td>
                  <td className="py-2 px-4 border-b max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`px-4 py-1.5 rounded font-semibold
                        ${
                          job.status === "Accepted"
                            ? "bg-green-100 text-green-700 border border-green-200"
                            : job.status === "Rejected"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-blue-100 text-blue-700 border border-blue-200"
                        }
                        shadow-sm group-hover:scale-105 transition`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
