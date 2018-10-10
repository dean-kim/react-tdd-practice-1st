import React from 'react'
import { TodoList } from "./TodoList"
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'


configure({ adapter: new Adapter() })

// addTodo with button click
// removeTodo with li click
// matches snapshot

describe('<TodoList />', () => {
    it('calls addTodo Redux action creater with button click', () => {
        const props = {
            addTodo: jest.fn(),
            todos: []
        }
        const wrapper = shallow(<TodoList {...props} />)
        wrapper.find('input').simulate('change', {currentTarget: {value: 'Buy Groceries'}})
        wrapper.find('.todo--button').simulate('click')

        expect(props.addTodo).toHaveBeenCalledWith({text: 'Buy Groceries'})
    })
})