import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout/layout'

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
      {/* Basic mostly unstyled form for testing login */}
      <main className="relative -mt-32">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <header>
              <h2 className="mb-6 text-3xl">Log in</h2>
            </header>

            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor="login-email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  ref={register({ required: 'Email is required' })}
                />
                {errors.email && <span role="alert">{errors.email.message}</span>}
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
                  <span role="alert">{errors.password.message}</span>
                )}
              </div>

              <button type="submit">Submit</button>
            </form>

            {errorMessage && <p role="alert">{errorMessage}</p>}
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Login
