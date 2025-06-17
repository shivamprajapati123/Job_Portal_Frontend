import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import LoadingAnimation from "../components/LoadingAnimation";

const ViewApplications = () => {
  const { backendUrl, companyToken } = useContext(AppContext);
  const [applicant, setApplicant] = useState(false);

  //  function to fetch applications data
  const fetchCompanyJobApplications = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/applicants", {
        headers: { token: companyToken },
      });
      if (data.success) {
        setApplicant(data.applications.reverse());
      } else {
        toast.error(data.message || "Failed to fetch applications data.");
      }
    } catch (error) {
      toast.error(
        error.message || "An error occurred while fetching applications."
      );
    }
  };

  // function to update job application status
  const changeJobStatus = async (id, status) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-status",
        { id, status },
        { headers: { token: companyToken } }
      );
      if (data.success) {
        fetchCompanyJobApplications();
      } else {
        toast.error(data.message || "Failed to change job status.");
      }
    } catch (error) {
      toast.error(
        error.message || "An error occurred while changing job status."
      );
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobApplications();
    }
  }, [companyToken]);

  return applicant ? (
    applicant.length === 0 ? (
      <div className="flex items-center justify-center h-full mt-2.5">
        <p className="text-xl sm:text-2xl">No Application Available</p>
      </div>
    ) : (
      <div className="container mx-auto p-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-sky-100 rounded-2xl shadow-xl border border-blue-100 p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
            <img src={assets.person_tick_icon} alt="" className="w-8 h-8" />
            Applications
          </h2>
          <div className=" rounded-xl shadow">
            <table className="w-full bg-white border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-blue-50 border-b">
                  <th className="py-3 px-4 text-left font-semibold">#</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    User Name
                  </th>
                  <th className="py-3 px-4 text-left max-sm:hidden font-semibold">
                    Job Title
                  </th>
                  <th className="py-3 px-4 text-left max-sm:hidden font-semibold">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Resume</th>
                  <th className="py-3 px-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {applicant
                  .filter((item) => item.jobId && item.userId)
                  .map((applicant, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition"
                      style={{ overflow: "visible" }}
                    >
                      <td className="py-3 px-4 border-b text-center font-semibold text-blue-500">
                        {index + 1}
                      </td>
                      <td className="py-3 px-4 border-b flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full shadow border-2 border-blue-100 group-hover:scale-110 transition"
                          src={applicant.userId.image}
                          alt=""
                        />
                        <span className="font-semibold">
                          {applicant.userId.name}
                        </span>
                      </td>
                      <td className="py-3 px-4 border-b max-sm:hidden">
                        {applicant.jobId.title}
                      </td>
                      <td className="py-3 px-4 border-b max-sm:hidden">
                        {applicant.jobId.location}
                      </td>
                      <td className="py-3 px-4 border-b">
                        <a
                          href={applicant.userId.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg inline-flex gap-2 items-center font-semibold hover:bg-blue-200 transition"
                        >
                          Resume
                          <img
                            src={assets.resume_download_icon}
                            alt=""
                            className="w-5 h-5"
                          />
                        </a>
                      </td>
                      <td className="py-2 px-4 border-b relative overflow-visible">
                        {applicant.status === "Pending" ? (
                          <div className="relative inline-block text-left group">
                            <button className="text-gray-500 hover:text-blue-600 p-2 rounded-full transition hover:bg-blue-100">
                              <svg
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <circle cx="4" cy="10" r="2" />
                                <circle cx="10" cy="10" r="2" />
                                <circle cx="16" cy="10" r="2" />
                              </svg>
                            </button>
                            <div className="z-10 hidden group-hover:block absolute right-0 top-8 w-32 bg-white border border-gray-200 rounded shadow-lg">
                              <button
                                className="block w-full text-left px-4 py-2 text-blue-600 font-semibold hover:bg-blue-50 transition"
                                onClick={() =>
                                  changeJobStatus(applicant._id, "Accepted")
                                }
                              >
                                Accept
                              </button>
                              <button
                                className="block w-full text-left px-4 py-2 text-red-500 font-semibold hover:bg-red-50 transition"
                                onClick={() =>
                                  changeJobStatus(applicant._id, "Rejected")
                                }
                              >
                                Reject
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`font-semibold px-2 py-1 rounded text-sm ${
                              applicant.status === "Accepted"
                                ? "text-green-600 bg-green-100"
                                : applicant.status === "Rejected"
                                ? "text-red-600 bg-red-100"
                                : "text-yellow-600 bg-yellow-100"
                            }`}
                          >
                            {applicant.status}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  ) : (
    <LoadingAnimation />
  );
};

export default ViewApplications;
