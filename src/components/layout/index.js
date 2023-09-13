import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'

import Routes from '../../routes'
import TopBar from '../topbar/topBar'
import Footer from '../footer/footer'

const Layout = () => {
  return (
    <Router>
      <TopBar />
      <Routes />
      <Footer />
    </Router>
  )
}
export default Layout
