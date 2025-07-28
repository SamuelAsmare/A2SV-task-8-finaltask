import React from 'react';
import data from './jsondata.json';
import {useNavigate } from 'react-router-dom'
const JobLists = () => {
    const navigate = useNavigate()
    const Go = (id)=>{
        navigate(`/dashboard/${id}`)
    }
  return (
    <div className="p-6 font-serif text-gray-700 bg-gray-50 flex flex-col items-left m-auto justify-center gap-10 w-full lg:w-3/4">
    <h1 className = "font-bold text-2xl">Opportunities</h1>
      {data.job_postings.map((job,index)=>(
        <div className="border-1 border-gray-200 rounded-xl p-6 flex flex-col gap-5 cursor-pointer
         transition duration-300 ease-in-out justify-between w-full lg:w-3/4 hover:shadow-lg "
         onClick={()=>Go(index)}>
          {/* avater and title */}
          <div className="flex gap-10"> 
              <img src={job.image} className="w-10 h-10 rounded-full"/>
          {/* title and location */}
              <div>
                <h1 className="font-semibold ">{job.title}</h1>
                <p className= "text-xs">{job.company}.  {job.about.location}</p>
              </div>
          </div>
           <p className="text-sm font-serif">{job.description}</p>
           {/* buttons */}
           <div className="flex gap-3">
            <button className= "rounded-xl text-xs text-green-600 bg-green-100 px-2 ">In person</button>
            <h1>|</h1>
            <button className= "rounded-xl text-xs border-1 text-yellow-300  px-2 ">Education</button>
            <button className= "rounded-xl text-xs border-1 text-blue-900  px-5 ">IT</button>
           </div>
        </div>

         
      ))}
    </div>
  );
};

export default JobLists;
