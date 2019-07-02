import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TrackInteractions } from '../client/src/styled-comps/TrackInteractions.jsx';

describe('TrackInteractions', () => {
  it('Play button renders text from props', () => {
    const trackInteractions = shallow(<TrackInteractions track={{ numPlays: 5 }} />);
    expect(trackInteractions.find('span').at(0).text()).toEqual('5');
  });
});