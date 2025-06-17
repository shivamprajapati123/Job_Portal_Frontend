import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // ✅ Ensure Quill styles are applied
import { assets, JobCategories, JobLocations } from "../assets/assets";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Software Development");
  const [level, setLevel] = useState("Senior");
  const [salary, setSalary] = useState(0);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const { backendUrl, companyToken } = useContext(AppContext);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const description = quillRef.current.root.innerHTML;

    if (!description || description === "<p><br></p>") {
      return toast.error("Job description cannot be empty.");
    }

    try {
      const { data } = await axios.post(
        backendUrl + "/api/company/post-job",
        { title, location, category, level, salary, description },
        { headers: { token: companyToken } }
      );

      if (data.success) {
        toast.success("Job added successfully!");
        setTitle("");
        setSalary(0);
        setLocation("Bangalore");
        setCategory("Programming");
        setLevel("Senior");
        quillRef.current.root.innerHTML = "";
      } else {
        toast.error(data.message || "Failed to add job. Please try again.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred while adding the job.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 via-white to-sky-100 rounded-2xl shadow-xl border border-blue-100 p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-8 flex items-center gap-2 justify-start self-start">
          <img src={assets.add_icon} alt="" className="w-8 h-8" />
          Add Job
        </h2>

        <form onSubmit={onSubmitHandler} className="flex flex-col gap-8 w-full">
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">Job Title</p>
              <input
                type="text"
                placeholder="Type here"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 hover:border-blue-400 shadow-sm"
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">Job Category</p>
              <select
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 hover:border-blue-400 shadow-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {JobCategories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">Job Location</p>
              <select
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 hover:border-blue-400 shadow-sm"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                {JobLocations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <p className="mb-2 font-semibold text-gray-700">Job Level</p>
              <select
                className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 hover:border-blue-400 shadow-sm"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="Beginner">Beginner</option>
                <option value="Moderate">Moderate</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="w-full sm:w-2/3">
              <p className="mb-2 font-semibold text-gray-700">
                Job Description
              </p>
              <div
                ref={editorRef}
                className="bg-sky-50 rounded-lg border border-blue-100 transition-all duration-300 hover:bg-blue-50 focus-within:ring-2 focus-within:ring-blue-300 shadow overflow-auto"
                style={{
                  marginTop: "5px",
                  width: "450px",
                  minWidth: "450px",
                  maxWidth: "450px",
                  height: "150px",
                  minHeight: "150px",
                  maxHeight: "150px",
                }}
              ></div>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-between">
              <div>
                <p className="mb-2 font-semibold text-gray-700">Salary</p>
                <input
                  min={0}
                  className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 hover:border-blue-400 shadow-sm"
                  type="number"
                  placeholder="2500"
                  onChange={(e) => setSalary(e.target.value)}
                  value={salary}
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-sky-400 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:bg-blue-700 transition-transform duration-200 active:scale-95"
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
