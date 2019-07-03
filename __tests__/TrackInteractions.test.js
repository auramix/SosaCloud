import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TrackInteractions } from '../client/src/styled-comps/TrackInteractions.jsx';
import { List } from '../client/src/styled-comps/TrackInteractions.jsx';


describe('TrackInteractions', () => {
  it('Renders 4 list items', () => {
    const trackInteractions = shallow(<TrackInteractions track={{ numPlays: 5 }} />);

    expect(trackInteractions.find('#interactive-list').children('li')).toHaveLength(4);
  });

  it('Play button renders text from props', () => {
    const trackInteractions = shallow(<TrackInteractions track={{ numPlays: 5, numReposts: 10, numComments: 15 }} />);

    expect(trackInteractions.find('span').at(0).text()).toEqual('5');
    expect(trackInteractions.find('span').at(2).text()).toEqual('10');
    expect(trackInteractions.find('span').at(3).text()).toEqual('15');
  });
});