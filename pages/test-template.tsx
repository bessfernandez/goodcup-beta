import React from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffeeTogo } from '@fortawesome/pro-duotone-svg-icons'
import useSWR from 'swr'
import { getAuthCookie } from '../utils/auth-cookies'

const TestTemplate = ({ token }) => {
  const router = useRouter()

  const { data: user } = useSWR('/api/user')

  {
    /*
    <!--
    This example requires Tailwind CSS v2.0+ 
    
    This example requires some changes to your config:
    
    ```
    // tailwind.config.js
    const colors = require('tailwindcss/colors')
    
    module.exports = {
      // ...
      theme: {
        extend: {
          colors: {
            'lightBlue': colors.lightBlue,
            teal: colors.teal,
          }
        }
      },
      plugins: [
        // ...
        require('@tailwindcss/forms'),
      ]
    }
    ```
  -->
   */
  }
  return (
    <div>
      <div className="relative bg-indigo-700 pb-32 overflow-hidden">
        {/* <!-- On: "bg-indigo-900", Off: "bg-transparent" --> */}
        <nav className="relative z-10 border-b border-indigo-500 border-opacity-25 lg:background-transparent lg:border-none">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-indigo-800">
              <div className="px-2 flex items-center lg:px-0">
                <div className="flex-shrink-0">
                  <FontAwesomeIcon
                    size="2x"
                    color="bg-indigo-100"
                    className="text-white"
                    icon={faCoffeeTogo}
                  />
                </div>
                <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                  <div className="flex">
                    <a
                      href="#"
                      className="rounded-md py-2 px-3 bg-black bg-opacity-25 text-sm font-medium text-white"
                      aria-current="page"
                    >
                      Dashboard
                    </a>

                    <a
                      href="#"
                      className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-indigo-800"
                    >
                      Jobs
                    </a>

                    <a
                      href="#"
                      className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-indigo-800"
                    >
                      Applicants
                    </a>

                    <a
                      href="#"
                      className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-indigo-800"
                    >
                      Company
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                <div className="max-w-lg w-full lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-indigo-100 focus-within:text-gray-400">
                    <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                      {/* <!-- Heroicon name: search --> */}
                      <svg
                        className="flex-shrink-0 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full bg-indigo-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-indigo-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  className="p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Icon when menu is closed. -->
                <!--
                  Heroicon name: menu
  
                  Menu open: "hidden", Menu closed: "block"
                --> */}
                  <svg
                    className="block flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* <!-- Icon when menu is open. -->
                <!--
                  Heroicon name: x
  
                  Menu open: "block", Menu closed: "hidden"
                --> */}
                  <svg
                    className="hidden flex-shrink-0 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <button className="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-indigo-800 hover:text-white focus:outline-none focus:bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    {/* <!-- Heroicon name: bell --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>

                  {/* <!-- Profile dropdown --> */}
                  <div className="relative flex-shrink-0 ml-4">
                    <div>
                      <button
                        className="rounded-full flex text-sm text-white focus:outline-none focus:bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white"
                        id="user-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="rounded-full h-8 w-8"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80"
                          alt=""
                        />
                      </button>
                    </div>
                    {/* <!--
                    Profile dropdown panel, show/hide based on dropdown state.
  
                    Entering: "transition ease-out duration-100"
                      From: "transform opacity-0 scale-95"
                      To: "transform opacity-100 scale-100"
                    Leaving: "transition ease-in duration-75"
                      From: "transform opacity-100 scale-100"
                      To: "transform opacity-0 scale-95"
                  --> */}
                    {/* <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Your Profile
                      </a>

                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>

                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--
          Mobile menu, toggle classNamees based on menu state.
  
          Menu open: "block", Menu closed: "hidden"
        --> */}
          <div className="bg-indigo-900 hidden lg:hidden">
            <div className="pt-2 pb-3 px-2 space-y-1">
              <a
                href="#"
                className="block rounded-md py-2 px-3 bg-black bg-opacity-25 text-base font-medium text-white"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-800"
              >
                Jobs
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-800"
              >
                Applicants
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-800"
              >
                Company
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-indigo-800">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-full h-10 w-10"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80h"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Debbie Lewis
                  </div>
                  <div className="text-sm font-medium text-indigo-200">
                    debbielewis@example.com
                  </div>
                </div>
                <button className="ml-auto flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-indigo-800 hover:text-white focus:outline-none focus:bg-indigo-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  {/* <!-- Heroicon name: bell --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-3 px-2">
                <a
                  href="#"
                  className="block rounded-md py-2 px-3 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-800"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  className="block rounded-md py-2 px-3 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-800"
                >
                  Settings
                </a>

                <a
                  href="#"
                  className="block rounded-md py-2 px-3 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-800"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </nav>
        {/* <!-- On: "bottom-0", Off: "inset-y-0" --> */}
        {/* Note: bottom-0 added below is what fixes search bar color */}
        <div
          className="absolute flex justify-center inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0"
          aria-hidden="true"
        >
          <div className="flex-grow bg-indigo-900 bg-opacity-75"></div>
          <svg
            className="flex-shrink-0"
            width="1750"
            height="308"
            viewBox="0 0 1750 308"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity=".75"
              d="M1465.84 308L16.816 0H1750v308h-284.16z"
              fill="#2D3A8C"
            />
            <path
              opacity=".75"
              d="M1733.19 0L284.161 308H0V0h1733.19z"
              fill="#19216C"
            />
          </svg>
          <div className="flex-grow bg-indigo-800 bg-opacity-75"></div>
        </div>
        <header className="relative py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Settings</h1>
          </div>
        </header>
      </div>

      <main className="relative -mt-32">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav>
                  <a
                    href="#"
                    className="group bg-indigo-50 border-l-4 border-indigo-500 px-3 py-2 flex items-center text-sm font-medium text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700"
                    aria-current="page"
                  >
                    {/* <!-- Heroicon name: user-circle --> */}
                    <svg
                      className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-indigo-500 group-hover:text-indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="truncate">Profile</span>
                  </a>

                  <a
                    href="#"
                    className="group mt-1 border-l-4 border-transparent px-3 py-2 flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {/* <!-- Heroicon name: cog --> */}
                    <svg
                      className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="truncate">Account</span>
                  </a>

                  <a
                    href="#"
                    className="group mt-1 border-l-4 border-transparent px-3 py-2 flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {/* <!-- Heroicon name: key --> */}
                    <svg
                      className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      />
                    </svg>
                    <span className="truncate">Password</span>
                  </a>

                  <a
                    href="#"
                    className="group mt-1 border-l-4 border-transparent px-3 py-2 flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {/* <!-- Heroicon name: bell --> */}
                    <svg
                      className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    <span className="truncate">Notifications</span>
                  </a>

                  <a
                    href="#"
                    className="group mt-1 border-l-4 border-transparent px-3 py-2 flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {/* <!-- Heroicon name: credit-card --> */}
                    <svg
                      className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span className="truncate">Billing</span>
                  </a>

                  <a
                    href="#"
                    className="group mt-1 border-l-4 border-transparent px-3 py-2 flex items-center text-sm font-medium text-gray-900 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {/* <!-- Heroicon name: view-grid-add --> */}
                    <svg
                      className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="truncate">Integrations</span>
                  </a>
                </nav>
              </aside>

              <form
                className="divide-y divide-gray-200 lg:col-span-9"
                action="#"
                method="POST"
              >
                {/* <!-- Profile section --> */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      Profile
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      This information will be displayed publicly so be careful what
                      you share.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col lg:flex-row">
                    <div className="flex-grow space-y-6">
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Username
                        </label>
                        <div className="mt-1 rounded-md shadow-sm flex">
                          <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                            workcation.com/
                          </span>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                            value="lisamarie"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          About
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                          ></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. URLs are hyperlinked.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                      <p
                        className="text-sm font-medium text-gray-700"
                        aria-hidden="true"
                      >
                        Photo
                      </p>
                      <div className="mt-1 lg:hidden">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                            aria-hidden="true"
                          >
                            <img
                              className="rounded-full h-full w-full"
                              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80h"
                              alt=""
                            />
                          </div>
                          <div className="ml-5 rounded-md shadow-sm">
                            <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                              <label
                                htmlFor="user_photo"
                                className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none"
                              >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                              </label>
                              <input
                                id="user_photo"
                                name="user_photo"
                                type="file"
                                className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden relative rounded-full overflow-hidden lg:block">
                        <img
                          className="relative rounded-full w-40 h-40"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80"
                          alt=""
                        />
                        <label
                          htmlFor="user-photo"
                          className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                        >
                          <span>Change</span>
                          <span className="sr-only"> user photo</span>
                          <input
                            type="file"
                            id="user-photo"
                            name="user-photo"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-12 gap-6">
                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium text-gray-700"
                      >
                        URL
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-6">
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* <!-- Privacy section --> */}
                <div className="pt-6 divide-y divide-gray-200">
                  <div className="px-4 sm:px-6">
                    <div>
                      <h2 className="text-lg leading-6 font-medium text-gray-900">
                        Privacy
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                      </p>
                    </div>
                    <ul className="mt-2 divide-y divide-gray-200">
                      <li className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <p
                            id="privacy-option-label-1"
                            className="text-sm font-medium text-gray-900"
                          >
                            Available to hire
                          </p>
                          <p
                            id="privacy-option-description-1"
                            className="text-sm text-gray-500"
                          >
                            Nulla amet tempus sit accumsan. Aliquet turpis sed sit
                            lacinia.
                          </p>
                        </div>
                        {/* <!-- On: "bg-indigo-500", Off: "bg-gray-200" --> */}
                        <button
                          type="button"
                          aria-pressed="true"
                          aria-labelledby="privacy-option-label-1"
                          aria-describedby="privacy-option-description-1"
                          className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Use setting</span>
                          {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                          <span
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          ></span>
                        </button>
                      </li>
                      <li className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <p
                            id="privacy-option-label-2"
                            className="text-sm font-medium text-gray-900"
                          >
                            Make account private
                          </p>
                          <p
                            id="privacy-option-description-2"
                            className="text-sm text-gray-500"
                          >
                            Pharetra morbi dui mi mattis tellus sollicitudin cursus
                            pharetra.
                          </p>
                        </div>
                        {/* <!-- On: "bg-indigo-500", Off: "bg-gray-200" --> */}
                        <button
                          type="button"
                          aria-pressed="false"
                          aria-labelledby="privacy-option-label-2"
                          aria-describedby="privacy-option-description-2"
                          className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Use setting</span>
                          {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                          <span
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          ></span>
                        </button>
                      </li>
                      <li className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <p
                            id="privacy-option-label-3"
                            className="text-sm font-medium text-gray-900"
                          >
                            Allow commenting
                          </p>
                          <p
                            id="privacy-option-description-3"
                            className="text-sm text-gray-500"
                          >
                            Integer amet, nunc hendrerit adipiscing nam. Elementum
                            ame
                          </p>
                        </div>
                        {/* <!-- On: "bg-indigo-500", Off: "bg-gray-200" --> */}
                        <button
                          type="button"
                          aria-pressed="true"
                          aria-labelledby="privacy-option-label-3"
                          aria-describedby="privacy-option-description-3"
                          className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Use setting</span>
                          {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                          <span
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          ></span>
                        </button>
                      </li>
                      <li className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <p
                            id="privacy-option-label-4"
                            className="text-sm font-medium text-gray-900"
                          >
                            Allow mentions
                          </p>
                          <p
                            id="privacy-option-description-4"
                            className="text-sm text-gray-500"
                          >
                            Adipiscing est venenatis enim molestie commodo eu gravid
                          </p>
                        </div>
                        {/* <!-- On: "bg-indigo-500", Off: "bg-gray-200" --> */}
                        <button
                          type="button"
                          aria-pressed="true"
                          aria-labelledby="privacy-option-label-4"
                          aria-describedby="privacy-option-description-4"
                          className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <span className="sr-only">Use setting</span>
                          {/* <!-- On: "translate-x-5", Off: "translate-x-0" --> */}
                          <span
                            aria-hidden="true"
                            className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          ></span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                    <button
                      type="button"
                      className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-5 bg-indigo-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req)
  return { props: { token: token || null } }
}

export default TestTemplate
