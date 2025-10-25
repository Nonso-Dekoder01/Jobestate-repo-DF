import React, { useEffect, useState } from "react";
import axios from "axios";
import donut from "../Assets/img/Donut and Shadow.png";

const ApproveJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("https://jobestate-23.onrender.com/api/jobs");
        // Filter out only unapproved jobs
        const unapprovedJobs = res.data.filter(job => !job.isApproved);
        setJobs(unapprovedJobs);
      } catch (err) {
        console.error("❌ Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  // Approve Job
  const handleApprove = async (id) => {
    try {
      await axios.put(`https://jobestate-23.onrender.com/api/jobs/approve/${id}`);
      setJobs(prev => prev.filter(job => job._id !== id)); // remove after approval
      alert("✅ Job approved successfully!");
    } catch (err) {
      console.error("❌ Error approving job:", err);
      alert("Approval failed!");
    }
  };

  // Delete Job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jobestate-23.onrender.com/api/jobs/${id}`);
      setJobs(prev => prev.filter(job => job._id !== id));
      alert("🗑️ Job deleted successfully!");
    } catch (err) {
      console.error("❌ Error deleting job:", err);
      alert("Delete failed!");
    }
  };

  return (
    <div className="mt-20 md:mt-32 w-full py-7 px-[20px] md:px-[50px] lg:px-[135px]">
      <div className="flex justify-between w-full items-center bg-white">
        <h1 className="text-5xl font-semibold">Approve Jobs</h1>
        <img src={donut} alt="" className="hidden md:flex" />
      </div>

      <div className="flex justify-between mt-10 gap-8 w-full items-start">
        {/* Job list */}
        <div className="w-full lg:w-5/12 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:max-h-[600px] lg:overflow-y-auto lg:pr-4">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div
                  key={job._id}
                  className="h-auto w-full p-6 flex flex-col gap-10 rounded-md shadow-lg bg-white cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="w-full h-auto flex justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">{job.company}</p>
                      <h3 className="text-2xl">{job.title}</h3>
                    </div>
                    <p className="text-xl">{job.salary}</p>
                  </div>
                  <div className="w-full h-auto flex justify-between">
                    <p>{job.location}</p>
                    <span className="underline text-blue-500 cursor-pointer">
                      View Details
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-10">
                No pending jobs to approve.
              </p>
            )}
          </div>
        </div>

        {/* Job details */}
        <div className="w-7/12 hidden lg:block bg-white shadow-lg">
          <div className="h-[calc(100vh-150px)] overflow-y-auto">
            {selectedJob ? (
              <div className="h-auto w-full p-6 flex flex-col gap-10 rounded-md shadow-lg bg-white sticky top-0 z-50">
                <div className="w-full h-auto flex justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs">{selectedJob.company}</p>
                    <h3 className="text-2xl">{selectedJob.title}</h3>
                  </div>
                  <p className="text-xl">{selectedJob.salary}</p>
                </div>
                <div className="w-full h-auto flex justify-between">
                  <p>{selectedJob.location}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(selectedJob._id)}
                      className="py-3 px-5 rounded-md text-white font-semibold bg-green-500"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDelete(selectedJob._id)}
                      className="py-3 px-5 rounded-md text-white font-semibold bg-red-500"
                    >
                      Decline
                    </button>
                  </div>
                </div>
                <p className="p-5 bg-white leading-8 text-gray-500">
                  {selectedJob.description}
                </p>
              </div>
            ) : (
              <p className="p-10 text-gray-500 text-center">
                Select a job to view details
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveJobs;
