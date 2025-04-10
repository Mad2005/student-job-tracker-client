import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const JobForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/jobs`, formData);
    window.location.reload(); // reload to fetch new list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" placeholder="Company" onChange={handleChange} required />
      <input name="role" placeholder="Role" onChange={handleChange} required />
      <select name="status" onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input name="date" type="date" onChange={handleChange} required />
      <input name="link" placeholder="Job Link" onChange={handleChange} />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
