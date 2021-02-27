import React from 'react'
import reactDom from 'react-dom'
import ReactDOM from 'react-router-dom'

import HabtExpanded from '../HabitExpanded/HabitExpanded'

describe('HabitExpanded Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<HabtExpanded/>, div)
        reactDom.unmountComponentAtNode(div)
    })
})