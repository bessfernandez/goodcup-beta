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
      }
    `,
    fetcher
  )

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
        <h2 className="text-lg mt-4">Roasters</h2>
        <ul className="my-5">
          {roasters.map((roaster) => {
            return (
              <li key={roaster.name}>
                {roaster.name}
                {roaster.coffees && (
                  <ul>
                    <li>{roaster.coffees.data[0].name}</li>
                  </ul>
                )}
              </li>
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

  if (error) {
    return (
      <Layout>
        <div>failed to load</div>
      </Layout>
    )
  }

  if (!data) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Layout>
      {/* <div className="md:flex bg-white rounded-lg p-24 justify-center">
        <img
          className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
          src="https://avatars0.githubusercontent.com/u/267047?s=460&v=4"
          alt="testing"
        />
        <div className="text-center md:text-left">
          <h2 className="text-lg">Bess Fernandez</h2>
          <div className="text-purple-500">JavaScript developer</div>
          <div className="text-gray-600">Twitter: @bessington</div>
          <div className="text-gray-600">that old chesnut</div>
        </div>
      </div> */}

      <div>
        <header>
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </header>
        <main>
          {data && data.allRoasters && (
            <React.Fragment>
              <h1 className="text-xl my-4">Coffees</h1>
              {returnCoffees(data.allRoasters.data)}
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
            <Box>
              <CircularProgress />
            </Box>
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
