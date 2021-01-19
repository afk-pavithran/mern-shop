import React from 'react'
import Header from './Components/Header/Header'
import Register from './Pages/Register/Register'
import './App.css'
import Login from './Pages/Login/Login'
import Home from  './Pages/Home/Home'
import { Switch, Route } from 'react-router-dom'
import Product from './Pages/Product/Product'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <Switch>
                <Route path='/' exact component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/home' component={Home} />
                <Route path='/products/:id' component={Product} />
            </Switch>
        </div>
    )
}

export default App
