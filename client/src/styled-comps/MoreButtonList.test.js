import MoreButtonList from './MoreButtonList.jsx';

describe('MoreButtonList', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow(<MoreButtonList imageUrl={"www.fakeUrl.com"} />);

    expect(wrapper.children()).toHaveLength(5);
  });

  // Snapshot test
  it('Has expected snapshot output', () => {
    const wrapper = shallow(
      <MoreButtonList />
    );
    expect(wrapper).toMatchSnapshot();
  })

});