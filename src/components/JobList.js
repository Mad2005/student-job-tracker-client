import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${id}`, { status });
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/jobs/${id}`);
    fetchJobs();
  };

  return (
    <div>
      <h2>📄 Job Applications</h2>
      {jobs.map((job) => (
        <div key={job._id} style={{ border: "4px solid #ccc", marginBottom: "10px", padding: "10px" }}>
          <h3>{job.role} @ {job.company}</h3>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Applied On:</strong> {new Date(job.date).toLocaleDateString()}</p>
          <p><a href={job.link} target="_blank" rel="noreferrer">Job Link</a></p>
          
          <select onChange={(e) => updateStatus(job._id, e.target.value)} value={job.status}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <button onClick={() => deleteJob(job._id)} style={{ marginLeft: "10px" }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
