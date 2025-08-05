import React ,{useEffect,useState} from 'react';
import {useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import Preloader from './preloader'
const Bookmarks = () => {
      const [jobs, setJobs] = useState([]);
      const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const Go = (id)=>{
      navigate(`/dashboard/${id}`)    }
      const Fetch = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("You must be logged in to fetch bookmarks.");
      setLoading(false);
      return;
    }
    const res = await axios.get("https://akil-backend.onrender.com/bookmarks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setJobs(res.data.data);
  } catch (err) {
    console.err(err.response?.data?.message || "Failed to fetch bookmarks");
  } finally {
    setLoading(false);
  }
};

    useEffect(() => {Fetch();}, []); // fetch data

    const RemoveBookmark = async (id) => {
    try {
        setLoading(true)
        const token = localStorage.getItem("token");
        await axios.delete(`https://akil-backend.onrender.com/bookmarks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },        });
     Fetch()
    } catch (err) {
    console.log(err);}  setLoading(false);   };
    
      if (loading) return <Preloader/>;
  return (
    <div className="p-6 font-serif text-gray-700 bg-gray-50 flex flex-col items-left m-auto justify-center gap-10 w-full lg:w-3/4">
    <h1 className = "font-bold text-2xl">Welcome to Your Bookmark</h1>
      {jobs.map((job)=>(
        <div className="border border-gray-200 rounded-xl p-6 flex flex-col gap-5 cursor-pointer
         transition duration-300 ease-in-out justify-between w-full lg:w-3/4 hover:shadow-lg "
         >
          {/* avater and title div*/}
          <div className="flex justify-around"> 
                        <img src={job.logoUrl || "/placeholder.jpg"} className="w-10 h-10 rounded-full" />
                    {/* title and location */}
                        <div>
                          <h1 className="font-bold ">{job.title}</h1>
                          <p className="text-xs">{job.orgName} • {job.location}</p>
                        </div>
                        <button onClick={(e)=>{e.stopPropagation(); RemoveBookmark(job.eventID)}} className="cursor-pointer hover:bg-gray-100 w-10 flex justify-center items-center rounded-2xl" title='Remove from bookmark'>{<BsBookmarkFill/>}</button>
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

export default Bookmarks;
