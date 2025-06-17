import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {

  const navigate = useNavigate(); 
  return (
    <div
      className="
        border
        rounded-lg
        bg-white
        shadow
        p-4
        flex flex-col items-center
        transition
        duration-300
        ease-in-out
        hover:scale-105
        hover:shadow-xl
        hover:border-blue-400
        hover:bg-blue-50
        cursor-pointer
        group
        min-h-auto
        max-w-xs
        mx-auto
      "
      onClick={() => { navigate(`/apply-job/${job?._id || job?.id}`); setTimeout(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, 100); // wait for route change }}
    >
      <img
        className="h-12 w-12 rounded-full border border-blue-100 shadow-sm mb-2 group-hover:scale-110 transition-transform duration-300"
        src={job.companyId?.image}
        alt="Company"
      />
      <h4 className="font-semibold text-base text-gray-800 group-hover:text-blue-700 transition-colors duration-300 text-center mb-1">
        {job.title}
      </h4>
      <div className="flex gap-2 mb-2">
        <span className="bg-blue-100 border border-blue-200 px-3 py-1 rounded-full text-blue-700 font-medium text-xs">
          {job.location}
        </span>
        <span className="bg-red-100 border border-red-200 px-3 py-1 rounded-full text-red-700 font-medium text-xs">
          {job.level}
        </span>
      </div>
      <p
        className="text-gray-500 text-xs mb-3 min-h-[48px] text-center"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 110) + "...",
        }}
      ></p>
      <div className="flex flex-col gap-2 w-full">
        <button onClick={()=>{navigate(`/apply-job/${job?._id || job?.id}`); scrollTo(0,0)}} className="bg-blue-600 text-white px-4 py-1.5 rounded-full shadow hover:bg-blue-700 transition-colors duration-200 text-xs w-full">
          Apply now
        </button>
        <button onClick={()=>{navigate(`/apply-job/${job?._id || job?.id}`); scrollTo(0,0)}} className="text-blue-600 border border-blue-600 rounded-full px-4 py-1.5 bg-white hover:bg-blue-50 transition-colors duration-200 text-xs w-full">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
