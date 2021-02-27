import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'

import HabitList from './HabitList'

describe('HabitList Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<HabitList/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})