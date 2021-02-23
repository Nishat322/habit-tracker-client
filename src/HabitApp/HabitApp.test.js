import React from 'react'
import ReactDOM from 'react-dom'

import HabitApp from './HabitApp'

describe('HabitApp Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<HabitApp/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})