import React from 'react'
import { TodoList } from "./TodoList"
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'


configure({ adapter: new Adapter() })

// addTodo with button click
// removeTodo with li click
// matches snapshot

