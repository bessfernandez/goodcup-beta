import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Layout from '../components/layout/layout'

const Signup = () => {
  const router = useRouter()

  const [errorMessage, setErrorMessage] = useState('')

  const { handleSubmit, register, watch, errors } = useForm()

  const onSubmit = handleSubmit(async (formData) => {
    if (errorMessage) setErrorMessage('')

    try {
      const res = await fetch('/api/signup', {
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
      <h1 className="text-xl my-4">Sign Up</h1>

      {/* Barebones signup for testing */}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. john@example.com"
            ref={register({ required: 'Email is required' })}
          />
          {errors.email && <span role="alert">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="e.g. John-1234"
            ref={register({ required: 'Password is required' })}
          />
          {errors.password && <span role="alert">{errors.password.message}</span>}
        </div>

        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="confirm-password"
            placeholder="e.g. John-1234"
            ref={register({
              validate: (value) =>
                value === watch('password') || 'Passwords do not match',
            })}
          />
          {errors.password2 && <span role="alert">{errors.password2.message}</span>}
        </div>

        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>

      {errorMessage && <p role="alert">{errorMessage}</p>}
    </Layout>
  )
}

export default Signup
