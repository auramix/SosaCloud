import React from 'react';
import expect from 'expect';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { ArtistPopUp } from '../client/src/styled-comps/ArtistPopUp.jsx';

describe('ArtistPopUp', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow(<ArtistPopUp />, { disableLifecycleMethods: true });

    expect(wrapper.find('.artist-pop-up').children('div')).toHaveLength(1);
    expect(wrapper.find('.artist-pop-up').children('div').children('*')).toHaveLength(5);
  });

});