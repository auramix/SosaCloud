import AnchorRelatedTracks from './AnchorRelatedTracks.jsx';

describe('AnchorRelatedTracks', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow(<AnchorRelatedTracks />);

    expect(wrapper.children()).toHaveLength(2);
  });

  // Snapshot test
  it('Has expected snapshot output', () => {
    const wrapper = shallow(
      <AnchorRelatedTracks artistName={"testname"} />
    );
    expect(wrapper).toMatchSnapshot();
  })

});