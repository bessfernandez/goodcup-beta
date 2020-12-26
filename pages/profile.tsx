import { useState } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { gql } from 'graphql-request'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'
import { graphQLClient } from '../utils/graphql-client'
import { getAuthCookie } from '../utils/auth-cookies'

const Profile = ({ token }) => {
  const router = useRouter()

  const { data: user } = useSWR('/api/user')

  const [errorMessage, setErrorMessage] = useState('')

  const { handleSubmit, register, errors } = useForm()

  const onSubmit = handleSubmit(async ({ task }) => {
    // TODO - handle profile updates
  })

  if (!user) {
    return (
      <Layout>
        <h1 className="text-xl my-4">Welcome!</h1>
        <p>
          Please{' '}
          <Link href="/login">
            <a>login</a>
          </Link>{' '}
          to add and log your favorite coffees.
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 className="text-lg my-4">Profile</h1>

      <div className="md:flex bg-white rounded-lg p-24 justify-center">
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
      </div>

      <form onSubmit={onSubmit} className={utilStyles.form}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Update name"
            id="name"
            ref={register({ required: 'Name is required' })}
          />
          {errors.name && (
            <span role="alert" className={utilStyles.error}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div className={utilStyles.submit}>
          <button type="submit">Update</button>
        </div>
      </form>

      {errorMessage && (
        <p role="alert" className={utilStyles.errorMessage}>
          {errorMessage}
        </p>
      )}
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const token = getAuthCookie(ctx.req)
  return { props: { token: token || null } }
}

export default Profile
