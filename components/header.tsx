import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffeeTogo } from '@fortawesome/pro-duotone-svg-icons'

const Header = () => {
  const router = useRouter()
  const [isDropOpen, setDropOpen] = useState(false)
  const [isHamburgerOpen, setHamburgerOpen] = useState(false)

  const fetcher = (url) => fetch(url).then((r) => r.json())

  const { data: user, mutate: mutateUser } = useSWR('/api/user', fetcher)

  const logout = async () => {
    const res = await fetch('/api/logout')
    if (res.ok) {
      mutateUser(null)
      router.push('/login')
    }
  }

  return (
    <header>
      {/* Header prototype below - does not handle navigation or JS state toggling*/}
      <div className="relative bg-indigo-900 pb-32 overflow-hidden">
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
                      Coffees
                    </a>

                    <a
                      href="#"
                      className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-indigo-800"
                    >
                      Roasters
                    </a>

                    <a
                      href="#"
                      className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-indigo-800"
                    >
                      Your Cups
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
                          src="https://avatars0.githubusercontent.com/u/267047?s=460&v=4"
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
                Coffees
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-800"
              >
                Roasters
              </a>

              <a
                href="#"
                className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-indigo-800"
              >
                Your Cups
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-indigo-800">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="rounded-full h-10 w-10"
                    src="https://avatars0.githubusercontent.com/u/267047?s=460&v=4"
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
        <div
          className="absolute bottom-0 flex justify-center inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0"
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
            <h1 className="text-3xl font-bold text-white">Good cup.</h1>
          </div>
        </header>
      </div>
    </header>
  )
}

export default Header
