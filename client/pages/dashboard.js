import React, { useState, useReducer, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from '../components/404';
import SecondNavbar from '../components/SecondNavbar';
import axios from 'axios';
import { useRouter } from 'next/router';

/* This example requires Tailwind CSS v2.0+ */
export default function Dashboard() {
  
  const router = useRouter();
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  
  // This state and useeffect allows to authenticate whether a guest is logged in or not, 
  // helps with figuring which navbar to display
    useEffect(() => {
      axios.get('http://localhost:3001/landing')
      .then(result => {
          if (result.data) {
            setIsLoggedIn(true); 
          }
        }).catch(err => {
          console.log(err.message);
      })
    }, [isLoggedIn]);

    return (
      <div className="bg-slate-700 overflow-hidden shadow rounded-lg divide-y divide-gray-200">
          { isLoggedIn? (
          <>
          <Navbar isLoggedIn={isLoggedIn} />
          <div className="px-4 py-12 min-w-full min-h-full bg-slate-700 flex justify-end sm:px-6">
                {/* Content goes here */}


                {/* We use less vertical padding on card headers on desktop than on body sections */}
            </div>
            <div className="px-4 py-5 mt-5 mb-10 bg-gray-50 mx-6 outline outline-black outline-1 sm:p-6">{/* Content goes here */}
                    <div className='ml-20 bg-gray-50  flex justify-end'>

                    </div>
                </div></>
        ) : (
          <>
          <SecondNavbar />
          <NotFound />
          </>
        )}
        <div >
          {/* Content goes here */}
          <Footer />
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    )
  }