import React from 'react'
import Head from 'next/head'
import Header from '../header'

const Layout = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Good cup - Your favorite cups</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <div>{children}</div>
    </main>
  </React.Fragment>
)

export default Layout
