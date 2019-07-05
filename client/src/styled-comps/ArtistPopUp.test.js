import React from 'react';
import expect from 'expect';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { ArtistPopUp, PopUpDiv, ArtistAnchor } from './ArtistPopUp.jsx';

describe('ArtistPopUp', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow(<ArtistPopUp />, { disableLifecycleMethods: true });

    expect(wrapper.find('.artist-pop-up').children('div')).toHaveLength(1);
    expect(wrapper.find('.artist-pop-up').children('div').children('*')).toHaveLength(5);
  });

  // Snapshot test
  it('Has expected snapshot output', () => {
    const component = renderer.create(
      <PopUpDiv />
    );
    let wrapper = component.toJSON();
    expect(wrapper).toMatchSnapshot();
  })

});

describe('PopUpDiv', () => {
  it('Has a visibility property', () => {
    const wrapper = renderer.create(<PopUpDiv />).toJSON()
    expect(wrapper).toHaveStyleRule('visibility', 'hidden');
  });
});

