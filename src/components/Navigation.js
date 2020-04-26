import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Burron from './Button'

const Navigation = () => {
    let history = useHistory()

    const id = '99888777'
    const redirect = (e) => {
        e.preventDefault()
        history.push(`/about?id=${id}`)
    }


    return (
        <div>
            <Link to={'/'}> Link para home </Link>
            <Link to={'/about'}> Link para about </Link>
            <a href={'/about'} onClick={(e) => redirect(e)}> Link para la búsqueda </a>
            <Burron />
            <Link to={'/contact'}>Mandame uno</Link>
        </div>
    )
}
export default Navigation 
