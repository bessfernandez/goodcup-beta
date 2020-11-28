import React from 'react'
import Link from 'next/link'
import { CircularProgress, Box } from '@material-ui/core'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import Layout from '../components/layout/layout'
import styles from './Home.module.css'
import { graphQLClient } from '../utils/graphql-client'
import { getAuthCookie } from '../utils/auth-cookies'

const Home = ({ token }) => {
  const fetcher = async (query) => await graphQLClient(token).request(query)

  const { data, error, mutate } = useSWR(
    gql`
      {
        allTodos {
          data {
            _id
            task
            completed
          }
        }
        allRoasters {
          data {
            name
            coffees {
              data {
                name
              }
            }
          }
        }
        allLogs {
          data {
            amount_water
            name
            rating
            coffee {
              name
            }
            rating
            logger {
              data {
                name
              }
            }
          }
        }
      }
    `,
    fetcher
  )

  console.log(data)

  const toggleTodo = async (id, completed) => {
    const mutation = gql`
      mutation PartialUpdateTodo($id: ID!, $completed: Boolean!) {
        partialUpdateTodo(id: $id, data: { completed: $completed }) {
          _id
          completed
        }
      }
    `

    const variables = {
      id,
      completed: !completed,
    }

    try {
      await graphQLClient(token)
        .setHeader('X-Schema-Preview', 'partial-update-mutation')
        .request(mutation, variables)
      mutate()
    } catch (error) {
      console.error(error)
    }
  }

  const returnCoffees = (
    roasters: [{ name: string; coffees: { data: [{ name: string }] } }]
  ) => {
    return (
      <React.Fragment>
        <ul className="my-5 mb-5">
          {roasters.map((roaster) => {
            return (
              <li className="mb-8" key={roaster.name}>
                {roaster.name}
                {roaster.coffees && (
                  <ul>
                    {roaster.coffees.data.map((coffee) => {
                      return <li className="m-4 nl-4">Coffee: {coffee.name}</li>
                    })}
                    {roaster.coffees.data && !roaster.coffees.data.length && (
                      <li className="m-4 ml-4">No coffees</li>
                    )}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }

  const returnLogs = (
    logs: [
      {
        amount_water: string
        coffee: { name: string }
        rating: string
        name: string
        logger: { data: [{ name: string }] }
      }
    ]
  ) => {
    return (
      <React.Fragment>
        <ul className="my-5">
          {logs.map((log) => {
            return (
              <React.Fragment>
                <li className="mt-8">Coffee name: {log.coffee.name}</li>
                <li className="my-2">Amount of water: {log.amount_water}</li>
                <li className="my-2">
                  Title: {log.name} <br />
                </li>
                <li className="my-2">Rating: {log.rating}</li>
                <li className="mt-4 my-4" key={log.name}>
                  {log.logger && (
                    <ul>
                      {log.logger.data.map((user) => {
                        return <li className="ml-3">Logged by: {user.name}</li>
                      })}
                    </ul>
                  )}
                </li>
              </React.Fragment>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }

  const deleteATodo = async (id: number) => {
    const mutation = gql`
      mutation DeleteATodo($id: ID!) {
        deleteTodo(id: $id) {
          _id
        }
      }
    `

    try {
      await graphQLClient(token).request(mutation, { id })
      mutate()
    } catch (error) {
      console.error(error)
    }
  }

  if (error && !data) {
    return (
      <Layout>
        <main className="relative -mt-32">
          <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                <aside className="py-6 lg:col-span-3">
                  <nav>
                    <a
                      href="#"
                      className="group bg-teal-50 border-l-4 border-indigo-300 px-3 py-2 flex items-center text-sm font-medium text-cyan-800 hover:bg-teal-50 hover:text-cyan-700"
                      aria-current="page"
                    >
                      <svg
                        className="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-cyan-800 group-hover:text-cyan-800"
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
                  <div className="py-6 px-4 sm:p-6 lg:pb-8">
                    <div>
                      <p className="my-10">
                        Please{' '}
                        <Link href="/login">
                          <a>login</a>
                        </Link>{' '}
                        to add and log your favorite coffees.
                      </p>
                      <h2 className="text-lg leading-6 font-medium text-gray-900">
                        Profile
                      </h2>
                      <p className="mt-1 text-sm text-gray-500">
                        This inhtmlFormation will be displayed publicly so be careful
                        what you share.
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
                            <span className="bg-gray-50 border border-r-0 border-indigo-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">
                              workcation.com/
                            </span>
                            <input
                              type="text"
                              name="username"
                              id="username"
                              autoComplete="username"
                              className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-indigo-300 "
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
                              className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                            ></textarea>
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description htmlFor your profile. URLs are
                            hyperlinked.
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
                                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=4&w=256&h=256&q=80h"
                                alt=""
                              />
                            </div>
                            <div className="ml-5 rounded-md shadow-sm">
                              <div className="group relative border border-indigo-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-light-blue-500">
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
                                  className="absolute w-full h-full opacity-0 cursor-pointerborder-indigo-300 rounded-md"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="hidden relative rounded-full overflow-hidden lg:block">
                          <img
                            className="relative rounded-full w-40 h-40"
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=facearea&facepad=4&w=320&h=320&q=80"
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
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
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
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
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
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
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
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 divide-y divide-gray-200">
                    <div className="px-4 sm:px-6">
                      <div>
                        <h2 className="text-lg leading-6 font-medium text-gray-900">
                          Privacy
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                          Ornare eu a volutpat eget vulputate. Fringilla commodo
                          amet.
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
                          <button
                            type="button"
                            aria-pressed="true"
                            aria-labelledby="privacy-option-label-1"
                            aria-describedby="privacy-option-description-1"
                            className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transhtmlForm ring-0 transition ease-in-out duration-200"
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
                          <button
                            type="button"
                            aria-pressed="false"
                            aria-labelledby="privacy-option-label-2"
                            aria-describedby="privacy-option-description-2"
                            className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transhtmlForm ring-0 transition ease-in-out duration-200"
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
                          <button
                            type="button"
                            aria-pressed="true"
                            aria-labelledby="privacy-option-label-3"
                            aria-describedby="privacy-option-description-3"
                            className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transhtmlForm ring-0 transition ease-in-out duration-200"
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
                              Adipiscing est venenatis enim molestie commodo eu
                              gravid
                            </p>
                          </div>
                          <button
                            type="button"
                            aria-pressed="true"
                            aria-labelledby="privacy-option-label-4"
                            aria-describedby="privacy-option-description-4"
                            className="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                          >
                            <span className="sr-only">Use setting</span>
                            <span
                              aria-hidden="true"
                              className="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transhtmlForm ring-0 transition ease-in-out duration-200"
                            ></span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                      <button
                        type="button"
                        className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-5 bg-light-blue-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-light-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500"
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
      </Layout>
    )
  }

  if (!data) {
    return (
      <Layout>
        <Box className="flex justify-center">
          <CircularProgress />
        </Box>
      </Layout>
    )
  }

  return (
    <Layout>
      <div>
        <header>
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </header>
        <main>
          {data && data.allRoasters && (
            <React.Fragment>
              <h2 className="text-xl my-4">Roasters</h2>
              {returnCoffees(data.allRoasters.data)}
              <h2 className="text-xl my-4">Your Cups</h2>
              {returnLogs(data.allLogs.data)}
            </React.Fragment>
          )}
          {data && data.allTodos ? (
            <React.Fragment>
              <h1 className="text-xl mt-10 mb-4">Next Fauna GraphQL CRUD</h1>
              <Link href="/new">
                <a>Create New Todo</a>
              </Link>
              <h2 className="text-lg my-4">Todo</h2>
              <ul>
                {data.allTodos.data.map((todo) => (
                  <li key={todo._id} className={styles.todo}>
                    <span
                      onClick={() => toggleTodo(todo._id, todo.completed)}
                      style={
                        todo.completed
                          ? { textDecorationLine: 'line-through' }
                          : { textDecorationLine: 'none' }
                      }
                    >
                      {todo.task}
                    </span>
                    <span className={styles.edit}>
                      <Link href="/todo/[id]" as={`/todo/${todo._id}`}>
                        <a>Edit</a>
                      </Link>
                    </span>
                    <span
                      onClick={() => deleteATodo(todo._id)}
                      className={styles.delete}
                    >
                      Delete
                    </span>
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ) : (
            <Layout>
              <Box className="flex justify-center">
                <CircularProgress />
              </Box>
            </Layout>
          )}
        </main>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const token: string = getAuthCookie(context.req)
  return { props: { token: token || null } }
}

export default Home
