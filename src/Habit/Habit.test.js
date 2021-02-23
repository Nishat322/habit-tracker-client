import React from 'react'
import ReactDOM from 'react-dom'

import Habit from './Habit'

describe('Habit Component', () => {
    it('renders wihtout crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Habit/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})