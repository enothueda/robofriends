import React from 'react';
import Card from './Card';

import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('expect to render Card component', () => {
    expect(shallow(<Card />).debug()).toMatchSnapshot();
});
