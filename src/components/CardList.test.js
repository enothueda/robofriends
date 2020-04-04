import React from 'react';
import CardList from './CardList';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('expect to render Card component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Doe',
            username: 'John',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots} />).debug()).toMatchSnapshot();
});
