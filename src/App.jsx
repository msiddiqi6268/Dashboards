import React from 'react'
import Home from './containers/home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './containers/Login'
import AuthPages from './containers/AuthPages'
import Dashboard from './containers/Dashboard'
import LiveSession from './containers/LiveSession'
import UploadVideo from './containers/UploadVideo'
import AnalyzeData from './containers/AnalyzeData'
import PrivateRoutes from './PrivateRoutes'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path = '/' element = {<Home />} />
      <Route exact path = '/login' element = {<AuthPages  comp = 'login' />} />
      <Route exact path = '/signup' element = {<AuthPages  comp = 'signup' />} />
      <Route exact path = '/' element = {<PrivateRoutes />}>
      <Route exact path = '/dashboard' element = {<Dashboard />} />
      <Route exact path = '/live-session' element = {<LiveSession />} />
      <Route exact path = '/upload-video' element = {<UploadVideo />} />
      <Route exact path = '/analyze-data' element = {<AnalyzeData />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App