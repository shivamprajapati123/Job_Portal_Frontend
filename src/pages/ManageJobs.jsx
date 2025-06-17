import React, { useEffect, useState } from "react";
import { assets, manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import LoadingAnimation from "../components/LoadingAnimation";

const ManageJobs = () => {
  const [jobs, setJobs] = useState(false);
  // function to fetch company jobs
  const navigate = useNavigate();
  const { backendUrl, companyToken } = useContext(AppContext);
  const fetchCompanyJobs = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/company/list-jobs", {
        headers: {
          token: companyToken,
        },
      });
      if (data.success) {
        setJobs(data.jobsData.reverse());
        console.log(data.jobsData);
      } else {
        toast.error(data.message || "Failed to fetch jobs. Please try again.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while fetching jobs.");
    }
  };

  useEffect(() => {
    if (companyToken) {
      fetchCompanyJobs();
    }
  }, []);

  // function to handle job click
  const changeJobVisibility = async (id) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/change-visibility",
        { id },
        { headers: { token: companyToken } }
      );
      if (data.success) {
        toast.success(data.message || "Job visibility updated successfully.");
        fetchCompanyJobs();
      } else {
        toast.error(
          data.message || "Failed to update job visibility. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        error.message || "An error occurred while updating job visibility."
      );
    }
  };

  return jobs ? (
    jobs.length === 0 ? (
      <div className="flex items-center justify-center h-full mt-2.5">
        <p className="text-xl sm:text-2xl">No Jobs are Available or Posted</p>
      </div>
    ) : (
      <div className="container mx-auto p-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-sky-100 rounded-2xl shadow-xl border border-blue-100 p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
            <img src={assets.home_icon} alt="" className="w-8 h-8" />
            Manage Jobs
          </h2>
          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full bg-white border border-gray-200 rounded-xl">
              <thead>
                <tr className="bg-blue-50 border-b text-blue-700">
                  <th className="py-3 px-4 text-left font-semibold">#</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Job Title
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Date</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Location
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Applicant
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Visible</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr
                    key={index + 1}
                    className="hover:bg-blue-50 transition group"
                    style={{ overflow: "visible" }}
                  >
                    <td className="py-3 px-4 border-b font-semibold text-center">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 border-b font-semibold">
                      {job.title}
                    </td>
                    <td className="py-3 px-4 border-b">
                      {moment(job.date).format("ll")}
                    </td>
                    <td className="py-3 px-4 border-b">{job.location}</td>
                    <td className="py-3 px-4 border-b">
                      <span className="inline-block  text-blue-700 px-3 py-1  font-semibold ">
                        {job.applicants}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b text-center">
                      <input
                        type="checkbox"
                        checked={job.visible}
                        onChange={() => changeJobVisibility(job._id)}
                        className="accent-blue-500 w-5 h-5 rounded border-2 border-blue-200 focus:ring-2 focus:ring-blue-400 transition"
                      />
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

export default ManageJobs;
