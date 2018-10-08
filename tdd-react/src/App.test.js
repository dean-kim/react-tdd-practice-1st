import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('should contain ul element className "tyler"', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('ul').hasClass('tyler')).toBe(true)
    })
});
