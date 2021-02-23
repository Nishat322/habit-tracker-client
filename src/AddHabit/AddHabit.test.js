import React from 'react'
import ReactDOM from 'react-dom'

import AddHabit from './AddHabit'

describe('AddHabit Component', () => {
    it('renders wihtout crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<AddHabit/>, div)
        ReactDOM.unmountComponentAtNode(div)
    })
})