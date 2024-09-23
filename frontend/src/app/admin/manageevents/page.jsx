
'use client'
import React, { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import AddCompetition from './addevent'
import Link from 'next/link'

  const ManageEvent = () => {
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

    const [isOpen, setIsOpen] = useState(false)
  const[Compts, setCompts] = useState([]);
  const fetchCompts = async () => {
  const res = await fetch("http://localhost:5000/events/getall",
  {
    // headers: {
    //   'x-auth-token': currentAdmin.token
    // }
  }
  );
  console.log(res.status);
  if(res.status==200)
  {
    const Compt = await res.json();
    console.log(Compt);
    setCompts(Compt); 
  }
  }
  
  useEffect(() => {
    fetchCompts();
  }, []);

const deleteCompt = (id) => {
  console.log(id);
const res = fetch ("http://localhost:5000/events/delete/"+id, {
  method: "DELETE",
})
if(res.status==200)
{
  fetchCompts();
}
}

  const displayCompts = () => {
 return Compts.map((Compt) => (
    <tr>
       <th scope="col" className="px-6 py-3 text-lg text-blue-900">
       <img src={`http://localhost:5000/uploads/${Compt.image}`} alt="Competition Image" />

        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {Compt.topic}
        </th>
        <th scope="col" className="px-6 py-3 text-lg text-blue-900">
          {Compt.description}
        </th>
        
        <button onClick = {() => {deleteCompt(Compt._id)}} className="text-white bg-red-900 mt-2 mb-2 hover:border-orange-700 rounded-xl py-1 px-5 hover:scale-105 hover:bg-orange-700 font-semibold duration-300 ">
          Delete
         </button>
        
      </tr>
  )
)}
  return(
    <div className="relative overflow-x-auto">
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>


          <AddCompetition close={() => setIsOpen(false)} />

          {/* <button onClick={() => setIsOpen(false)}>Deactivate</button>
                <button onClick={() => setIsOpen(false)}>Cancel</button> */}
        </Dialog.Panel>
      </Dialog>
      
      <button
        type="button"
        onClick={e => setIsOpen(true)}
        className="mt-16 py-3 mx-2 mb-3 px-4 inline-flex text-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
         Add Events
      </button>
  <table className="w-full text-sm text-left rtl:text-right bg-[#E0FFFF] mx-2 mt-2">
  
    
    <thead className="text-xs text-gray-700 uppercase bg-blue-900 dark:text-[#E0FFFF]">
    <tr>
    <th scope="col" className="px-6 py-3 text-lg">
          Cover
        </th>
    <th scope="col" className="px-6 py-3 text-lg">
          Name
        </th>
        <th scope="col" className="px-6 py-3 text-lg">
          Description
        </th>
       
        <th scope="col" className="px-6 py-3 text-lg">
        Action
        </th>
        </tr>
        
        
    </thead>
    
    <tbody>  
    
      {displayCompts()}
      
    </tbody>
    
  </table>
</div>


  )
}

 
export default ManageEvent;