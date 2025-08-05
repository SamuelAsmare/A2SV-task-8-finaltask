import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Preloader from "./preloader"
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get('https://akil-backend.onrender.com/opportunities/search');
        const found = res.data.data.find((job) => job.id === id);
        setJob(found);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <Preloader/>;
  return (
    <div className="p-6 w-full lg:w-3/4 mx-auto font-serif text-gray-700">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p className="text-sm text-gray-600">{job.orgName} • {job.location?.join(', ')}</p>
      <img src={job.logoUrl} alt="Org Logo" className="w-20 h-20 mt-4 rounded" />
      <p className="mt-6">{job.description}</p>
      <div className="mt-4">
        <h2 className="font-semibold">Requirements</h2>
        <p>{job.requirements}</p>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Responsibilities</h2>
        <p>{job.responsibilities}</p>
      </div>
      <div className="mt-4">
        <h2 className="font-semibold">Categories</h2>
        <ul className="list-disc list-inside">
          {job.categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetails;
