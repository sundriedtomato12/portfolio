import './App.css'
import React from 'react'
import { MainPage } from './pages/MainPage'
import {
  Route,
  Routes
} from 'react-router-dom'

function App (): JSX.Element {
  return (
		<Routes>
			<Route path='/' element={<MainPage />} />
		</Routes>
  )
}

export default App
