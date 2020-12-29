import React from 'react'
import Link from 'next/link'
import { CircularProgress, Box } from '@material-ui/core'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import Layout from '../components/layout/layout'
import CoffeeDetail from '../components/coffee-detail'
import { graphQLClient } from '../utils/graphql-client'
import { getAuthCookie } from '../utils/auth-cookies'

const Home = ({ token }) => {
  const fetcher = async (query) => await graphQLClient(token).request(query)

  const { data, error, mutate } = useSWR(
    gql`
      {
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
                      return (
                        <li key={roaster.name} className="m-4 nl-4">
                          Coffee: {coffee.name}
                        </li>
                      )
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
              // eslint-disable-next-line react/jsx-key
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
                        // eslint-disable-next-line react/jsx-key
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
  return (
    <Layout>
      <main className="relative -mt-32">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <div className="divide-y divide-gray-200 lg:col-span-9">
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div>
                    <header>
                      <h2 className="text-3xl font-bold leading-tight text-gray-900">
                        Dashboard
                      </h2>
                    </header>
                    <main>
                      {error && !data && (
                        <div>
                          <p className="mt-6">I will be fancier soon.</p>
                          <p className="my-10">
                            Please{' '}
                            <Link href="/login">
                              <a>login</a>
                            </Link>{' '}
                            to add and log your favorite coffees.
                          </p>
                        </div>
                      )}

                      <CoffeeDetail />

                      {data && data.allRoasters && (
                        <React.Fragment>
                          <h2 className="text-xl my-4">Roasters</h2>
                          {returnCoffees(data.allRoasters.data)}
                          <h2 className="text-xl my-4">Your Cups</h2>
                          {returnLogs(data.allLogs.data)}
                        </React.Fragment>
                      )}
                      {!data && !error && (
                        <Box className="flex justify-center">
                          <CircularProgress />
                        </Box>
                      )}
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const token: string = getAuthCookie(context.req)
  return { props: { token: token || null } }
}

export default Home
