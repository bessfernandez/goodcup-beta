import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout/layout'
import utilStyles from '../styles/utils.module.css'

const Login = () => {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('')

  const { handleSubmit, register, errors } = useForm()

  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage('')

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error(error)
      setErrorMessage(error.message)
    }
  })

  return (
    <Layout>
      <main className="relative -mt-32">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <div className="divide-y divide-gray-200 lg:col-span-9">
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <header>
                    <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900">
                      Log in
                    </h2>
                  </header>

                  <form onSubmit={onSubmit} className={utilStyles.form}>
                    <div>
                      <label htmlFor="login-email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="login-email"
                        ref={register({ required: 'Email is required' })}
                      />
                      {errors.email && (
                        <span role="alert" className={utilStyles.error}>
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="user-password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="user-password"
                        ref={register({ required: 'Password is required' })}
                      />
                      {errors.password && (
                        <span role="alert" className={utilStyles.error}>
                          {errors.password.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="bg-indigo-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Submit
                    </button>
                  </form>

                  {errorMessage && (
                    <p role="alert" className={utilStyles.errorMessage}>
                      {errorMessage}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Login
