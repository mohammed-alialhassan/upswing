import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

axios.defaults.withCredentials = true;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuDropDown(props) {
  // Passing down isLoggedIn state from homepage
  let isLoggedIn = props.isLoggedIn;

  const router = useRouter();
  // OnClick handler used for running the logout and deleting the cookie session
  // Goal is to have it conditionally render and set up in a different place
  const deleteCookie = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .then((res) => {
        router.push("/login");
        //  navigate('/user-login');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Menu
      as="div"
      className="relative inline-block visible text-left z-50 py-4 lg:mr-6"
    >
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          <MenuIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {isLoggedIn ? (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/dashboard">
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm hover:bg-gray-100"
                        )}
                      >
                        Dashboard
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/account-settings">
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm hover:bg-gray-100"
                        )}
                      >
                        Account settings
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      onClick={deleteCookie}
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/login">
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm hover:bg-gray-100"
                        )}
                      >
                        Login
                      </a>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/register">
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm hover:bg-gray-100"
                        )}
                      >
                        Register
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </>
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
