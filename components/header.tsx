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
      <div>
        <div className="relative bg-indigo-600 pb-32 overflow-hidden">
          <nav className="relative z-10 border-b border-indigo-300 border-opacity-25 lg:bg-transparent lg:border-none">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative h-16 flex items-center justify-between">
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
                        className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-800"
                      >
                        Your Coffees
                      </a>

                      <a
                        href="#"
                        className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-800"
                      >
                        Top Picks
                      </a>

                      <a
                        href="#"
                        className="rounded-md py-2 px-3 text-sm font-medium text-white hover:bg-light-blue-800"
                      >
                        Roasters
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
                  <div className="max-w-lg w-full lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative text-indigo-400 focus-within:text-indigo-400">
                      <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
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
                        className="block w-full bg-indigo-700 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-indigo-200 focus:outline-none focus:bg-indigo-500 focus:ring-white focus:border-indigo-400 focus:placeholder-indigo-300 focus:text-coolGrey-100 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex lg:hidden">
                  <button
                    className="p-2 rounded-md inline-flex items-center justify-center text-indigo-300 hover:text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>

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
                    <button className="flex-shrink-0 rounded-full p-1 text-indigo-100 hover:bg-indigo-600 hover:text-indigo-100 focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white">
                      <span className="sr-only">View notifications</span>
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

                    <div className="relative flex-shrink-0 ml-4">
                      <div>
                        <button
                          className="rounded-full flex text-sm text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white"
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
                      <div
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-blue-900 hidden lg:hidden">
              <div className="pt-2 pb-3 px-2 space-y-1">
                <a
                  href="#"
                  className="block rounded-md py-2 px-3 bg-black bg-opacity-25 text-base font-medium text-white"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-800"
                >
                  Your Coffees
                </a>

                <a
                  href="#"
                  className="block rounded-md py-2 px-3 text-base font-medium text-white hover:text-white hover:bg-light-blue-800"
                >
                  Top Picks
                </a>
              </div>
              <div className="pt-4 pb-3 border-t border-indigo-300 ">
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
                    <div className="text-sm font-medium text-light-blue-200">
                      debbielewis@example.com
                    </div>
                  </div>
                  <button className="ml-auto flex-shrink-0 rounded-full p-1 text-light-blue-200 hover:bg-light-blue-800 hover:text-white focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white">
                    <span className="sr-only">View notifications</span>
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
                    className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-800"
                  >
                    Your Profile
                  </a>

                  <a
                    href="#"
                    className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-800"
                  >
                    Settings
                  </a>

                  <a
                    href="#"
                    className="block rounded-md py-2 px-3 text-base font-medium text-light-blue-200 hover:text-white hover:bg-light-blue-800"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div
            className="absolute flex justify-center inset-x-0 left-1/2 transhtmlForm -translate-x-1/2 w-full overflow-hidden lg:inset-y-0"
            aria-hidden="true"
          >
            <div className="flex-grow bg-indigo-100 bg-opacity-75"></div>
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
                fill="#647ACB"
              />
              <path
                opacity=".75"
                d="M1733.19 0L284.161 308H0V0h1733.19z"
                fill="#4055A8"
              />
            </svg>
            <div className="flex-grow bg-light-blue-800 bg-opacity-75"></div>
          </div>
          <header className="relative py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Your Profile</h1>
            </div>
          </header>
        </div>
      </div>
      {/* 
      <nav className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FontAwesomeIcon
                  size="2x"
                  color="bg-indigo-100"
                  className="text-white"
                  icon={faCoffeeTogo}
                />
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-indigo-800 bg-indigo-100 focus:outline-none focus:text-white focus:bg-coolGrey-100">
                      Home
                    </a>
                  </Link>

                  <Link href="/">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                      Your Coffees
                    </a>
                  </Link>

                  <Link href="/">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                      Top Picks
                    </a>
                  </Link>

                  <Link href="/">
                    <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                      Roasters
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {user ? (
                  <React.Fragment>
                    <Link href="/profile">
                      <a className="p-10 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                        {user.email}
                      </a>
                    </Link>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Link href="/login">
                      <a className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                        Login
                      </a>
                    </Link>
                    <Link href="/signup">
                      <a className="p-5 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700">
                        Signup
                      </a>
                    </Link>
                  </React.Fragment>
                )}

                <button
                  className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                  aria-label="Notifications"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>

                <div className="ml-3 relative">
                  <div>
                    <button
                      className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                      id="user-menu"
                      aria-label="User menu"
                      aria-haspopup="true"
                      onClick={(e) => setDropOpen(!isDropOpen)}
                    >
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://avatars0.githubusercontent.com/u/267047?s=460&v=4"
                        alt="Profile page"
                      />
                    </button>
                  </div>
                  {isDropOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                      <div
                        className="py-1 rounded-md bg-white shadow-xs"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link href="/login">
                          <a
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Login
                          </a>
                        </Link>
                        <Link href="/profile">
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            role="menuitem"
                          >
                            Your Profile
                          </a>
                        </Link>

                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Settings
                        </a>

                        <button
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={(e) => setHamburgerOpen(!isHamburgerOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:bg-gray-700 focus:text-white"
              >
                <svg
                  className="block h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isHamburgerOpen && (
          <div>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Dashboard
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Team
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Projects
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Calendar
              </a>

              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              >
                Reports
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://avatars0.githubusercontent.com/u/267047?s=460&v=4"
                    alt="testing"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-base font-medium leading-none text-white">
                    Bess Fernandez
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    bess@example.com
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Your Profile
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Settings
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        )}
      </nav> */}
    </header>
  )
}

export default Header
