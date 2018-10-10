import React from 'react'
import Form from './Form'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import api from './api'

configure({ adapter: new Adapter() })