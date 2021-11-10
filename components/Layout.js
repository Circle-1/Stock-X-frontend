import Head from 'next/head'
import { Component } from 'react/cjs/react.production.min'
import Nav from '../components/NavBar'
import Footer from './Footer'
import 'tailwindcss/tailwind.css'

const Layout = ({children}) => {
    return (
      <div class="Head">
        <Head>
          <title>CIRCLE 1</title>
          <meta name="Stock-X" content="Stock Market Prediction" />
        </Head>
        <Nav/>
        {children}
        <Footer/>
      </div>
  )
  }

export default Layout;