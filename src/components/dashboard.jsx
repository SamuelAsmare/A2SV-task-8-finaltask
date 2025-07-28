import React from 'react';
import {useParams} from "react-router-dom"
import { PlusCircleIcon, FireIcon, MapPinIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';


import data from './jsondata.json'
const Dashboard=()=>{
    const {id} = useParams()
    const json = data.job_postings[id]
    return (
     <div className="flex text-gray-600 font-serif gap-10 flex-wrap p-3">
        <div className="flex flex-col gap-10 w-full lg:w-1/2 px-5 lg:px-10"> {/*left */}
            <div className="flex flex-wrap gap-0 justify-center">
                {/* <PlusCircleIcon className="w-6 h-6 text-blue-500"/> */}
                <h1 className="font-extrabold text-xl">Description</h1>
                <p>{json.description}</p>
            </div>
            <div>  {/*  Responsibilites */}
                <h1 className="font-extrabold text-xl">Responsibilities</h1>
                {json.responsibilities.map((item)=>(
                    <div className="flex gap-2">
                        <CheckCircleIcon className="w-4 text-green-600"/>
                        <span className="list-none">{item}</span>
                    </div>

                ))}
            </div>
            <div>{/*Candidates  */}
                 <h1 className="font-extrabold text-xl">Ideal Candidate we want</h1>
                 <p>age : {json.ideal_candidate.age}</p>
                 <p>gender : {json.ideal_candidate.gender}</p>
                 {json.ideal_candidate.traits.map((item)=>(
                    <li>{item}</li>
                 ))

                 }
            </div>
        <div className="flex items-center gap-1 w-full">
            <MapPinIcon className="w-5 h-4 text-blue-400" />
            <span className="text-sm">{json.when_where}</span>
        </div>
        </div>
        <div className="flex flex-col gap-10 w-full lg:w-1/3 px-5 lg:px-10">{/* Right */}
        <div className="flex flex-col gap-3 border-b-2 border-gray-300 p-3">  {/* About */}
            <h1 className="font-extrabold text-xl ">About</h1>
            <div>
            <div className="flex gap-3">{/* posted on */}
              <PlusCircleIcon className="h-10 p-1 text-blue-500 border rounded-full border-gray-300"/>
              <section>
                <p>Posted on</p>
                <p>{json.about.posted_on}</p>
              </section>
            </div>
            <div className="flex gap-3">{/* deadline */}
              <FireIcon className="h-10 p-1 text-blue-500 border rounded-full border-gray-300"/>
              <section>
                <p>Deadline</p>
                <p>{json.about.deadline}</p>
              </section>
            </div>
            <div className="flex gap-3">{/* Location */}
              <MapPinIcon className="h-10 p-1 text-blue-500 border rounded-full border-gray-300"/>
              <section>
                <p>Location</p>
                <p>{json.about.location}</p>
              </section>
            </div>
            <div className="flex gap-3">{/*Start date  */}
              <CalendarIcon className="h-10 p-1 text-blue-500 border rounded-full border-gray-300"/>
              <section>
                <p>Start date</p>
                <p>{json.about.start_date}</p>
              </section>
            </div>
            <div className="flex gap-3">{/*End date  */}
              <CalendarIcon className="h-10 p-1 text-blue-500 border rounded-full border-gray-300"/>
              <section>
                <p>End date</p>
                <p>{json.about.end_date}</p>
              </section>
            </div>
         </div>
        </div>
        <div>{/**categories */}
           <h1 className="font-extrabold text-xl ">Categories</h1>
           <div className="flex flex-wrap gap-3">
              <button className="bg-yellow-100 px-2 text-orange-300 rounded-xl">{json.about.categories[0]}</button>
              <button className="bg-green-100 px-2 text-green-500 rounded-xl">{json.about.categories[1]}</button>
           </div>
        </div>
        <div>{/**Required skills */}
          <h1 className="font-extrabold text-xl ">Required skills</h1>
          {json.about.required_skills.map((item)=>(
            <button className="m-3 bg-red-100 px-3 rounded-full">{item}</button>
          ))}
        </div>
       </div>
     </div>
    )
}
export default Dashboard