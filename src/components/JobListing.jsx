import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchedFilter, setSearchedFilter, jobs } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentpage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]); // should be array
  const [selectedLocation, setSelectedLocation] = useState([]); // should be array
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job) =>
      selectedCategory.length === 0 || selectedCategory.includes(job.category);

    const matchesLocation = (job) =>
      selectedLocation.length === 0 || selectedLocation.includes(job.location);

    const matchesTitle = (job) =>
      !searchedFilter.title ||
      job.title.toLowerCase().includes(searchedFilter.title.toLowerCase());

    const matchesSearchLocation = (job) =>
      !searchedFilter.location ||
      job.location
        .toLowerCase()
        .includes(searchedFilter.location.toLowerCase());

    const newFilteredJobs = jobs
      .slice()
      .reverse()
      .filter(
        (job) =>
          matchesCategory(job) &&
          matchesLocation(job) &&
          matchesTitle(job) &&
          matchesSearchLocation(job)
      );

    setFilteredJobs(newFilteredJobs);
    setCurrentpage(1);
  }, [jobs, selectedCategory, selectedLocation, searchedFilter]);

  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p x-4 rounded-lg py-6 transition-all duration-300">
        {/* Search filter */}
        {isSearched &&
          (searchedFilter.title !== "" || searchedFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4 text-blue-700">
                Current Search
              </h3>
              <div className="mb-4 text-gray-600 flex flex-wrap gap-2">
                {searchedFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded shadow hover:bg-blue-100 transition">
                    {searchedFilter.title}
                    <img
                      src={assets.cross_icon}
                      alt=""
                      className="cursor-pointer hover:rotate-90 transition-transform duration-200"
                      onClick={() => {
                        setSearchedFilter((prev) => ({ ...prev, title: "" }));
                      }}
                    />
                  </span>
                )}

                {searchedFilter.location && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded shadow hover:bg-blue-100 transition">
                    {searchedFilter.location}
                    <img
                      src={assets.cross_icon}
                      alt=""
                      className="cursor-pointer hover:rotate-90 transition-transform duration-200"
                      onClick={() => {
                        setSearchedFilter((prev) => ({
                          ...prev,
                          location: "",
                          
                        }));
                      }}
                    />
                  </span>
                )}
              </div>
            </>
          )}

        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden mb-4 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 transition"
        >
          {showFilter ? "Close" : "Filters"}
        </button>

        {/* Category filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 text-purple-700">
            Search by Categories
          </h4>
          <ul className="space-y-2 text-gray-600">
            {JobCategories.map((category, ind) => (
              <li
                key={ind}
                className="flex gap-2 items-center hover:bg-blue-50 px-2 py-1 rounded transition"
              >
                <input
                  onChange={() => handleCategoryChange(category)}
                  checked={selectedCategory.includes(category)}
                  className="scale-125 accent-blue-500"
                  type="checkbox"
                />
                <span className="transition-colors duration-200">
                  {category}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 text-purple-700">
            Search by Location
          </h4>
          <ul className="space-y-2 text-gray-600">
            {JobLocations.map((location, ind) => (
              <li
                key={ind}
                className="flex gap-2 items-center hover:bg-blue-50 px-2 py-1 rounded transition"
              >
                <input
                  onChange={() => handleLocationChange(location)}
                  checked={selectedLocation.includes(location)}
                  className="scale-125 accent-purple-500"
                  type="checkbox"
                />
                <span className="transition-colors duration-200">
                  {location}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2 text-blue-800 drop-shadow">
          Latest Jobs
        </h3>
        <p className="mb-6 text-gray-500">
          Find your dream job at top companies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredJobs
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentpage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
                alt=""
                className="w-8 h-8 p-1 rounded-full hover:bg-blue-100 transition"
              />
            </a>
            {Array.from({ length: Math.ceil(filteredJobs.length / 6) }).map(
              (_, index) => (
                <a href="#job-list" key={index}>
                  <button
                    onClick={() => setCurrentpage(index + 1)}
                    className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded shadow-sm transition
                    ${
                      currentPage === index + 1
                        ? "bg-blue-100 text-blue-700 font-bold scale-105"
                        : "text-gray-500 hover:bg-blue-50"
                    }`}
                  >
                    {index + 1}
                  </button>
                </a>
              )
            )}
            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentpage(
                    Math.min(currentPage + 1, Math.ceil(filteredJobs.length / 6))
                  )
                }
                src={assets.right_arrow_icon}
                alt=""
                className="w-8 h-8 p-1 rounded-full hover:bg-blue-100 transition"
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
