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
        },
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
                    {roaster.coffees.data && !roaster.coffees.data.length &&
                      <li className="m-4 ml-4">No coffees</li>
                    }
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }

  const returnLogs= (
    logs: [{ amount_water: string; coffee: { name: string},  rating: string; name: string; logger: { data: [{ name: string }] } }]
  ) => {
    return (
      <React.Fragment>
        <ul className="my-5">
          {logs.map((log) => {
            return (
              <React.Fragment>
              <li className="mt-8">
                Coffee name: {log.coffee.name}
              </li>
              <li className="my-2">
                Amount of water: {log.amount_water}
              </li>
              <li className="my-2">
                Title: {log.name} <br />
              </li>
              <li className="my-2">
              Rating: {log.rating}
              </li>
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
        <h1 className="text-xl my-4">Welcome!</h1>
        <p>
          Please {" "}
          <Link href="/login">
            <a>login</a>
          </Link>
          {" "}
          to add and log your favorite coffees.
        </p>
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
