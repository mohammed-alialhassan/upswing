import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Switch } from '@headlessui/react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AccountInfo(props) {

    const router = useRouter();
    let accountInfo = props.accountInfo;
    let id = accountInfo.dbUser;
    const firstName = accountInfo.first_name;
    const lastName = accountInfo.last_name;
    const userName = accountInfo.username;
    const userEmail = accountInfo.email;
    const phoneNumber = accountInfo.phone_number;
    
    const [agreed, setAgreed] = useState(false);
    const [ first_name, setFirstName ] = useState(firstName);
    const [ last_name, setLastName ] = useState(lastName);
    const [ phone_number, setPhoneNumber ] = useState(phoneNumber);
    const [ username, setUserName ] = useState(userName);
    const [ email, setEmail ] = useState(userEmail);

    const handleClick = (event) => {
        
        event.preventDefault();
        // console.log( 'first: ', first_name, 'username: ', username, user_id);

        axios.put("http://localhost:3001/api/users", {
            id,
            first_name,
            last_name,
            phone_number,
            username,
            email
        }).then((res) => {
            setTimeout(() => {
                router.push('/account-settings');
            }, 1200);
            toast.success("Successfully updated account settings!");
          }).catch((err) => {
            toast.error("Unable to update settings at this time...");
          });
    }

  return (
    <div className="bg-white py-16 px-4  overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
      <div className="relative max-w-xl mx-auto">
        <svg
          className="absolute left-full transform translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          className="absolute right-full bottom-0 transform -translate-x-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"> User Account Settings </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>
        <div className="mt-12 max-w-2xl">
          <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  defaultValue={firstName}
                  value={first_name}
                  onChange={ event => setFirstName(event.target.value)}
                  autoComplete="given-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  defaultValue={lastName}
                  value={last_name}
                  onChange={ event => setLastName(event.target.value)}
                  autoComplete="family-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="username"
                  id="username"
                  defaultValue={userName}
                  value={username}
                  onChange={ event => setUserName(event.target.value)}
                  autoComplete="organization"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={userEmail}
                  value={email}
                  onChange={ event => setEmail(event.target.value)}
                  autoComplete="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  >
                    <option>US</option>
                    <option>CA</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  defaultValue={phoneNumber}
                  value={phone_number}
                  onChange={ event => setPhoneNumber(event.target.value)}
                  autoComplete="tel"
                  className="py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                onClick={handleClick}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Lets talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}