import React from 'react'
import Form from './Form'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import api from './api'


configure({ adapter: new Adapter() })

describe('<Form /', () => {
    // opted in by default
    test('receive promotions default is true', () => {
        const wrapper = shallow(<Form />)
        const promotionInput = wrapper.find('[data-testid="checked"]')
        expect(promotionInput.props().checked).toBe(true)
    })
    // actually input their information
    // submit the form, calls api
    // matches snapshot
})