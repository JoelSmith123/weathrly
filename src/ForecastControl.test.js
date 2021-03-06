import React from 'react';
import { shallow } from 'enzyme';
import ForecastControl from './ForecastControl';

describe('Card', () => {
  it('should exist', () => {
    const wrapper = shallow(<ForecastControl/>);

    expect(wrapper).toBeDefined();
  });
  it('should have 2 buttons', () => {
    const wrapper = shallow(<ForecastControl/>);

    expect(wrapper.find('button').length).toEqual(2);
  });
});
