import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

// eslint-disable-next-line
export default props =>
  <BrowserRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routes />
      <NotificationContainer />
      <Footer />
    </div>
  </BrowserRouter>