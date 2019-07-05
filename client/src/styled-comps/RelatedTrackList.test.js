import RelatedTrackList from './RelatedTrackList.jsx';

describe('RelatedTrackList', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow(<RelatedTrackList />);

    expect(wrapper.children()).toHaveLength(0);
  });

  // Snapshot test
  it('Has expected snapshot output', () => {
    const wrapper = shallow(
      <RelatedTrackList />
    );
    expect(wrapper).toMatchSnapshot();
  })

});