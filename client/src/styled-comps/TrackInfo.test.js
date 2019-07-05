import { TrackInfo } from './TrackInfo.jsx';

describe('TrackInfo', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow(<TrackInfo track={{ artistName: 'The Dude', trackName: 'Knockin\' on Heaven\'s Door' }} />);

    expect(wrapper.children()).toHaveLength(4);
  });

  // Snapshot test
  it('Has expected snapshot output', () => {
    const wrapper = shallow(
      <TrackInfo track={{ artistName: 'The Dude', trackName: 'Knockin\' on Heaven\'s Door' }} />
    );
    expect(wrapper).toMatchSnapshot();
  })

});