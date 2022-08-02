import React, { Fragment, useState, useContext, useEffect } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import MenuDropDown from "./MenuDropdown";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ isLoggedIn }) {
  const [ticker, setTicker] = useState("");
  const [clicked, setClicked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (clicked) {
      if (openModal) {
        toast.warn(
          "Once the clock is done spinning, the search feature will be ready to use again."
        );
      } else {
        axios
          .post("http://localhost:3001/stock-data-collector", {
            ticker: ticker,
          })
          .then((result) => {
            /* If conditional checks to see whether company's stock data is already in our database.
        IF the data is not present in database, fetch through Alpha Vantage API */
            if (result.data.message === "Data received by database!") {
              setTimeout(() => {
                axios
                  .post("http://localhost:3001/api/stock-data", {
                    ticker: ticker,
                  })
                  .then((result) => {
                    const tickerData = result.data;
                    router.push(
                      {
                        pathname: 'stock',
                        query: {
                          name: ticker,
                          data: JSON.stringify(tickerData),
                        },
                      },
                      'stock'
                    );
                  });
              }, 3000);

              /* The else covers company data that is already present, it fetches from the database
         and routes directly to ticker page without hitting the Alpha Vantage API */
            } else {
              const tickerData = result.data;
              setTimeout(() => {
                router.push(
                  {
                    pathname: 'stock',
                    query: {
                      name: ticker,
                      data: JSON.stringify(tickerData),
                    },
                  },
                  'stock'
                );
              }, 2500);
            }
            toast.success("Your search is in process! Yes lord!");
          })
          .catch((err) => {
            toast.error("Sorry! Please login first!");
          });

        setTicker("");
        setTimeout(() => {
          setOpenModal(false);
          setClicked(false);
        }, 18000);
      }
    }
  }, [clicked, openModal]);
  

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <ToastContainer
              position="top-right"
              autoClose={8000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <div className="max-w-screen-2xl mx-auto px-2 sm:px-2 lg:px-0">
              <div className="relative flex justify-between lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-28"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <Link href="/home">
                        <a className="fill-stone-600 hover:fill-amber-300">
                          {" "}
                          <path
                            fillRule="evenodd"
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </a>
                      </Link>
                    </svg>
                  </div>
                </div>
                <div className="min-w-0 flex-1  md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full ml-80 lg:mx-32 lg:ml-20 xl:ml-80 xl:mx-0">
                      <label htmlFor="ticker" className="sr-only">
                        Search
                      </label>
                      <div className="relative max-w-xl">
                        <div className="min-w-full pointer-events-none absolute inset-y-0  pl-3 flex items-center">
                          <tickerIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />

                          <div className="min-w-full flex justify-end">
                            {clicked ? (
                              <button
                                type="button"
                                className=" h-9 px-3 my-5 z-50 pointer-events-auto border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => setOpenModal(true)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="animate-spin h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                            ) : (
                              <button
                                type="button"
                                className=" h-9 px-3 my-5 z-50 pointer-events-auto border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={() => setClicked(true)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>

                        <input
                          id="ticker"
                          name="ticker"
                          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          placeholder="Search..."
                          type="text"
                          value={ticker}
                          onChange={(event) => setTicker(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>

                <div className="order-last lg:mr-6">
                  <MenuDropDown isLoggedIn={isLoggedIn} />
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
