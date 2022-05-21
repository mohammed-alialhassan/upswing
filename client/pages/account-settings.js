import React, { useState, useReducer, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFound from '../components/404';
import SecondNavbar from '../components/SecondNavbar';
import AccountInfo from '../components/accountInfo';
import axios from 'axios';
import { useRouter } from 'next/router';

/* This example requires Tailwind CSS v2.0+ */
export default function AccountSettings() {
  
  const router = useRouter();
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ accountInfo, setAccountInfo ] = useState('');
  
  // This state and useeffect allows to authenticate whether a guest is logged in or not, 
  // helps with figuring which navbar to display
    useEffect(() => {
      axios.get('http://localhost:3001/landing')
      .then(result => {
          if (result.data.user) {
            setIsLoggedIn(true); 
            setAccountInfo(result.data);
         /*   setFirstName(result.data.first_name);
            setLastName(result.data.last_name);
            setPhoneNumber(result.data.phone_number);
            setUserName(result.data.phone_number);
            setEmail(result.data.email); */
          }
        }).catch(err => {
          console.log(err.message);
      })
    }, [isLoggedIn, accountInfo.username]);

    return (
      <div className="bg-slate-700 overflow-hidden shadow rounded-lg">
          { isLoggedIn? (
          <>
          <Navbar isLoggedIn={isLoggedIn} />
          <div className="px-4 py-6 min-w-full min-h-full bg-slate-700 flex justify-end sm:px-6">
                {/* Content goes here */} 


                {/* We use less vertical padding on card headers on desktop than on body sections */}
            </div>
            <div className="px-4 py-5  mb-16 mx-6 sm:p-6 2xl:mb-44 2xl:mt-16 2xl:mx-24">{/* Content goes here */}
                    <div className=' bg-white flex mx-48 justify-center 2xl:pb-12'>
                      <AccountInfo accountInfo={accountInfo} />
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