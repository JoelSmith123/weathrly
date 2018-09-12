import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  });

  it('should accept props', () => {
    let weekday = 'Thursday';
    let wrapper = shallow(<Card weekday={weekday} />);
    let card = shallow(<Card weekday={'Thursday'} />); 

    expect(wrapper).toEqual(card);
  })
  
});
