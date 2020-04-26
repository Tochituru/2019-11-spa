import React from 'react'
import { Link } from 'react-router-dom'
import Burron from './Button'

const Navigation = () => {
    return (
        <div>
            <Link to={'/'}> Link para home </Link>
            <Link to={'/about'}> Link para about </Link>
            <Link to={'/Amor'}>Llegó Luke </Link>
            <Burron />
            <Link to={'/Contact'}>Mandame uno</Link>
        </div>
    )
}
export default Navigation 
