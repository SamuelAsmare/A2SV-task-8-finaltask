import React ,{useEffect,useState} from 'react';
import {useNavigate , Link } from 'react-router-dom'
import axios from 'axios'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import Preloader from './preloader'
const JobLists = () => {
    const navigate = useNavigate()
    const Go = (id)=>{
        navigate(`/dashboard/${id}`)    }
      const [jobs, setJobs] = useState([]);
      const [loading, setLoading] = useState(true);
      const Fetch = async()=>{
        try{
        const res = await axios.get("https://akil-backend.onrender.com/opportunities/search")
        setJobs(res.data.data)
        }        catch(err){
            alert(err)
        }        finally{
            setLoading(false)
        }
     }
      useEffect(() => {
        Fetch()
      }, []);
    const AddBookmark = async (id) => {
      try {
        const token = localStorage.getItem("token");
        console.log(token)
        if (!token) {
          alert("You must be logged in to bookmark.");
          return;
        }

        await axios.post(
      `https://akil-backend.onrender.com/bookmarks/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
      alert("successfully added to bookmarks")
  } catch (err) {
    console.error(err.response?.data || err.message);
    alert(err.response?.data?.message || "Bookmark failed");
  }
};
      if (loading) return <Preloader/>;
  return (
    <div className="p-6 font-serif text-gray-700 bg-gray-50 flex flex-col items-left m-auto justify-center gap-10 w-full lg:w-3/4">
    <div className="flex items-center justify-between flex-wrap">
      <h1 className = "font-bold text-2xl">Opportunities</h1>
      <Link to="/bookmarks" className="font-bold text-green-600 hover:text-green-500 transition">Bookmark</Link>
     </div> 
      {jobs.map((job)=>(
        <div className="border border-gray-300 rounded-xl p-6 flex flex-col gap-5 cursor-pointer
         transition duration-300 ease-in-out justify-between w-full lg:w-3/4 hover:shadow-lg "
         onClick={()=>Go(job.id)}>
          {/* avater and title div*/}
          <div className="flex justify-around"> 
              <img src={job.logoUrl || "/placeholder.jpg"} className="w-10 h-10 rounded-full" />
          {/* title and location */}
              <div>
                <h1 className="font-bold ">{job.title}</h1>
                <p className="text-xs">{job.orgName} • {job.location}</p>
              </div>
              <button onClick={(e)=>{e.stopPropagation(); AddBookmark(job.id)}} className="cursor-pointer hover:bg-gray-100 w-10 flex justify-center items-center rounded-2xl"><BsBookmark/></button>
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
