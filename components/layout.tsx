import React from 'react'
import Head from 'next/head'
import styles from './layout.module.css'
import Header from './header'

const Layout = ({ children }) => (
  <React.Fragment>
    <Head>
      <title>Next Fauna Auth</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <div className={styles.container}>{children}</div>
    </main>
  </React.Fragment>
)

export default Layout
