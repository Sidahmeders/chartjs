import React from 'react'
import './styles/app.scss'
import Chart from './pages/chart'
import Home from './pages/home'


const App = () => {
    return (
        <div className="app">
           <Home /> 
           <Chart />
           <Home />
        </div>
    )
}

export default App