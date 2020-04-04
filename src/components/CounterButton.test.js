import React from 'react';
import CounterButton from './CounterButton';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('expect to render CounterButton component', () => {
    const mockColor = 'red'
    expect(shallow(<CounterButton color={mockColor} />).debug()).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual('red');
})