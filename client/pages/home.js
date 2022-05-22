import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import SecondNavbar from "../components/SecondNavbar";
import Footer from "../components/Footer";
import { NewspaperIcon, IdentificationIcon, MailIcon } from '@heroicons/react/outline'
import ReactTypingEffect from 'react-typing-effect';
import axios from "axios";

const supportLinks = [
    {
      name: 'First-Time User?',
      href: '/register',
      description:
        'In order to gain access to our features, UpSwing requires you to create a free account. This helps with managing our numbers and monitoring growth',
      icon: IdentificationIcon,
    },
    {
      name: 'Already a user?',
      href: '/login',
      description:
        `That's great! We love to see you back again and hope your enjoying the app! Click Let's Begin to make your way back to the login page.`,
      icon: MailIcon,
    },
    {
      name: 'Need Support?',
      href: '#',
      description:
        `Don't worry, we got you covered. Click Let's Begin to write and send a support inquiry and a member of our team will be in touch shortly.`,
      icon: NewspaperIcon,
    },
  ]

  const metrics = [
    { id: 1, stat: '3K+', emphasis: 'Companies', rest: `tracked through the integration of Alpha Vantage's API` },
    { id: 2, stat: '10K+', emphasis: 'Trades a day', rest: 'are made on the market. Why miss out?' },
    { id: 3, stat: '96%', emphasis: 'Profit rate', rest: 'speaks for the integration and accuracy of our app powered by machine learning to adapt over the long run.' },
    { id: 4, stat: '2M+', emphasis: 'Logins and page visits', rest: `daily by many of our satisfied users. Don't miss your chance to be one of them!` },
  ]

/* This example requires Tailwind CSS v2.0+ */
export default function Home() {

// This state and useeffect allows to authenticate whether a guest is logged in or not, 
// helps with figuring which navbar to display
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

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
        <>
        <div className="max-h-screen bg-slate-50 overflow-y-scroll">

          {isLoggedIn === true? (<Navbar isLoggedIn={isLoggedIn} />) : (<SecondNavbar isLoggedIn={isLoggedIn} />)}
       
      <div className="relative mx-auto  min-h-screen max-w-screen-4xl lg:mx-16">
          
        <div className="absolute inset-0 mb-56 mt-24 bg-slate-50">
          <img
            className="w-full h-full object-cover rounded-lg outline outline-1 outline-transparent shadow-md shadow-black bg-slate-50"
            src="https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt=""
          />
          <div className="absolute max-w-2xl inset-0 bg-slate-50 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto text-center py-24 px-96 sm:py-52 sm:px-96 lg:px-8 lg:py-28 xl:py-56">
        <ReactTypingEffect
        text={["Welcome  to  UpSwing"]}
        className="text-4xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-6xl xl:text-7xl"
      />
      <h2 className="mt-1 ml-8 text-xl text-gray-300 max-w-6xl italic font-semibold lg:text-sm xl:text-xl"> (Founded in 2021) </h2>
          <p className="mt-5 ml-8 text-2xl text-slate-50 max-w-6xl lg-mt-0 lg:text-xl xl:text-2xl">
          UpSwing came a long way
          from its beginnings as just an idea!
          When the 3 first started out, their passion for innovation and accessibility drove them to find a way to make
          expert level market information, open to all. This was the impetus to turn hard work and inspiration into to a reliable and user-friendly investing resource.
          All over the world, people are taking advantage Upswing and consumers are thrilled to not only be making profit off the AI but also learning about
          the market and its MANY trends.
          </p>
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
      <div className="mx-auto mb-20 max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base mr-2 font-bold tracking-wider text-sky-600 uppercase">The Stock Market</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            No experience? No problem.
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            We do the leg work for you. With its machine-learning API, UpSwing is designed to give you
            knowledge of the stock market, at the tip of your fingers.
          </p>
        </div>
        <div className="mt-10 ml-6 -mb-10 sm:-mb-24 lg:-mb-50">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://i.imgur.com/WbV32OE.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>

      <div className="min-h-screen relative bg-gray-900">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
              src="https://images.unsplash.com/photo-1638913658211-c999de7fe786?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 className="text-md font-semibold text-indigo-300 tracking-wide uppercase">Valuable Metrics</h2>
          <p className="mt-3 text-3xl font-extrabold text-white">
          Providing valuable metrics to traverse the investment field
          </p>
          <p className="mt-5 text-xl text-gray-300">
          Our team has put in many hours and sleepless nights into research. Not only to make our app work
            but also who may need it the most? Whether youre in the prime of your life or just entering life after
            highschool, UpSwing WILL help you make profit.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-white">{item.stat}</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>


      <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="relative pb-48 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1652819674544-a284366b1d0d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">What Happens Next?</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Time to get started on your investing journey! Are you excited? We are!
            Please refer below to see which path you should follow and once again on behalf of our team, 
            Welcome to UpSwing!
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-sky-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-sky-600 hover:text-indigo-600">
                  Lets Begin<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
    <Footer />
      </>
    )
  }