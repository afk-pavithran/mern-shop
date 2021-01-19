import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const history = useHistory();
    return (
        <div className='Header'>
            <h1>Mern-Shop</h1>
            <ul>
                <li onClick={() => history.push('/')}>Register</li>
                <li onClick={()=> history.push('/login')}>Login</li>
                <li onClick={()=> history.push('/home')}>Cart</li>
            </ul>
        </div>
    )
}

export default Header
