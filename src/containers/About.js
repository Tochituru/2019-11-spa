import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const About = (props) => {
    let [state, setState] = useState()
    let history = useHistory()
    //console.log(history.location)
    //forma de react hooks
    //console.log(window.location)
    //forma nativa del navegador

    useEffect(() => {
        let url = new URL(window.location.href)
        setState(url.searchParams.get('id'))
    }, [])

    return (
        <Fragment>
            <h1>Quiénes somos</h1>
            <p>{props.data} </p>
            {state}
        </Fragment>
    )

}

export default About