import React from 'react'
import { createRoot } from 'react-dom/client'
import Home from './vistas/home.jsx'

const App = () => {
  return (
    <Home />
  )
}

// Render
const getRoot = () => { return document.getElementById('root') }
createRoot(getRoot()).render(<App />)
