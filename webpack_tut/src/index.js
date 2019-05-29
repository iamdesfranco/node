import React from 'react'
import { render } from 'react-dom'
import './style.scss'

const Greeting = () => <h1>Hello World</h1>

render (
    <Greeting/>,
    document.getElementById('target')
)