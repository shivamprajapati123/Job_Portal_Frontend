import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import LoadingAnimation from "../components/LoadingAnimation";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import kConverter from "k-converter";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";

const ApplyJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null); // FIXED: was []
  const [isApplied, setIsApplied] = useState(false);
  const {
    jobs,
    backendUrl,
    userData,
    userApplications,
    fetchUserApplications,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const { getToken } = useAuth();

  const fetchJob = async () => {
    try {
      const { data } = await axios.get(backendUrl + `/api/jobs/${id}`);

      if (data.success) {
        setJobData(data.jobs);
      } else {
        toast.error(data.message || "Failed to fetch job details.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while fetching job.");
    }
  };

  const applyHandler = async () => {
    try {
      if (!userData) {
        return toast.error("Please login to apply for the job.");
      }

      if (!userData.resume) {
        navigate("/applications");
        return toast.error("Please upload your resume to apply for the job.");
      }

      // ✅ Check in frontend (safe check)
      const alreadyApplied = userApplications?.some(
        (application) =>
          application?.jobId === jobData._id ||
          application?.jobId?._id === jobData._id
      );

      if (alreadyApplied) {
        return toast.error("You have already applied for this job.");
      }

      const token = await getToken();
      const { data } = await axios.post(
        `${backendUrl}/api/users/apply`,
        { jobId: jobData._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success("Applied for the job successfully!");
        // ✅ Manually update local application list
        userApplications.push({ jobId: jobData._id });
        setIsApplied(true);
        // await fetchUserApplications(); // Refresh user applications
      } else {
        toast.error(data.message || "Failed to apply for the job.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred while applying."
      );
    }
  };

  const checkAlreadyApplied = () => {
    const hasApplied = userApplications?.some(
      (item) => item.jobId._id === jobData._id
    );
    setIsApplied(hasApplied);
  };

  useEffect(() => {
    fetchJob();
  }, [id, backendUrl]);

  useEffect(() => {
    if (userApplications.length > 0 && jobData) {
      checkAlreadyApplied();
    }
  }, [jobData, userApplications]);

  const [filters, setFilters] = useState({
    category: false,
    location: false,
    company: false,
  });

  const filteredJobs = jobs.filter((job) => {
    if (!jobData) return false;
    if (job._id === jobData._id) return false;
    if (filters.category && job.category !== jobData.category) return false;
    if (filters.location && job.location !== jobData.location) return false;
    if (filters.company && job.companyId?._id !== jobData.companyId?._id)
      return false;
    return true;
  });

  return jobData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col py-10 container px-4 2xl:px-20 mx-auto bg-gradient-to-br from-blue-50 via-white to-sky-100">
        <div className="bg-white/80 backdrop-blur-lg text-black rounded-2xl w-full border border-sky-100 transition-all duration-300 p-4 md:p-8">
          <div className="flex justify-center md:justify-between flex-wrap gap-8 px-6 md:px-14 py-10 md:py-20 mb-6 bg-sky-50 border border-sky-400 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                className="h-24 w-24 object-contain bg-white rounded-lg p-2 mr-0 md:mr-4 mb-4 md:mb-0 border transition-transform duration-300 hover:scale-105"
                src={jobData.companyId.image}
                alt="Company Logo"
              />

              <div className="text-center md:text-left text-neutral-700">
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-blue-700 to-sky-400 bg-clip-text text-transparent">
                  {jobData.title}
                </h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img
                      src={assets.suitcase_icon}
                      alt=""
                      className="w-5 h-5"
                    />
                    <span className="font-semibold">
                      {jobData.companyId.name}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <img
                      src={assets.location_icon}
                      alt=""
                      className="w-5 h-5"
                    />
                    {jobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" className="w-5 h-5" />
                    {jobData.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" className="w-5 h-5" />
                    <span className="font-semibold text-blue-700">
                      CTC: ${kConverter.convertTo(jobData.salary)}
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button
                className={`${
                  isApplied
                    ? "bg-gradient-to-r from-green-600 to-green-400 hover:bg-green-700"
                    : "bg-gradient-to-r from-blue-600 to-sky-400 hover:bg-blue-700"
                }  p-2.5 px-10 text-white rounded-2xl font-semibold hover:scale-105  transition-transform duration-200`}
                onClick={applyHandler}
              >
                {isApplied ? "Already Applied" : "Apply Now"}
              </button>
              <p className="mt-1 text-gray-600 italic">
                Posted {moment(jobData.date).fromNow()}
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="w-full lg:w-7/12 mb-8 lg:mb-0 pr-0 lg:pr-8">
              <h2 className="font-bold text-2xl mb-4 text-blue-700">
                Job Description
              </h2>
              <div
                className="rich-text bg-sky-50 rounded-lg p-6 transition-all duration-300 hover:bg-blue-100"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button
                className={`${
                  isApplied
                    ? "bg-gradient-to-r from-green-600 to-green-400 hover:bg-green-700"
                    : "bg-gradient-to-r from-blue-600 to-sky-400 hover:bg-blue-700"
                }  p-2.5 px-10 mt-10 text-white rounded-2xl font-semibold hover:scale-105  transition-transform duration-200`}
                onClick={applyHandler}
              >
                {isApplied ? "Already Applied" : "Apply Now"}
              </button>
            </div>
            <div className="w-full lg:w-5/12 lg:pl-8 space-y-5">
              <h2 className="text-xl font-bold text-blue-700 mt-1 mb-4 flex items-center gap-2">
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
                    d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
                Related Jobs
              </h2>
              <div className="flex flex-row gap-3 mb-6 flex-wrap">
                <span className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 hover:bg-blue-200 focus-within:ring-2 focus-within:ring-blue-400 transition cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.category}
                    onChange={() =>
                      setFilters((f) => ({ ...f, category: !f.category }))
                    }
                    className="accent-blue-600 w-5 h-5 rounded focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="text-gray-700 font-semibold">Category</span>
                </span>
                <span className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 hover:bg-blue-200 focus-within:ring-2 focus-within:ring-blue-400 transition cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.location}
                    onChange={() =>
                      setFilters((f) => ({ ...f, location: !f.location }))
                    }
                    className="accent-blue-600 w-5 h-5 rounded focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="text-gray-700 font-semibold">Location</span>
                </span>
                <span className="flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-2 hover:bg-blue-200 focus-within:ring-2 focus-within:ring-blue-400 transition cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.company}
                    onChange={() =>
                      setFilters((f) => ({ ...f, company: !f.company }))
                    }
                    className="accent-blue-600 w-5 h-5 rounded focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="text-gray-700 font-semibold">Company</span>
                </span>
              </div>
              {filteredJobs.length === 0 ? (
                <div className="text-center text-gray-400 py-8 bg-slate-50 rounded-lg">
                  No jobs found matching the selected filters.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredJobs
                    .filter((job) => {
                      // set of applied job
                      const appliedJobsIds = new Set(
                        userApplications.map(
                          (app) => app.jobId && app.jobId._id
                        )
                      );
                      // return jobs that are not applied
                      return !appliedJobsIds.has(job._id);
                    })
                    .slice(0, 4)
                    .map((job, index) => (
                      <div
                        key={index}
                        className="rounded-xl bg-white/90 border border-blue-100 hover:bg-blue-50 hover:scale-105 transition-all duration-200 "
                      >
                        <JobCard job={job} />
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <LoadingAnimation />
  );
};

export default ApplyJob;
