import React from 'react'
import { render } from 'react-dom'

const Greeting = () => "Hello"

render (
    <Greeting/>,
    document.getElementById('target')
)