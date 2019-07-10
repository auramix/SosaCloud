import { Artwork } from './Artwork.jsx';

describe('Artwork', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow(<Artwork imageUrl={"www.fakeUrl.com"} />);

    expect(wrapper.children()).toHaveLength(2);
  });

  // Snapshot test
  it('Has expected snapshot output', () => {
    const wrapper = shallow(
      <Artwork imageUrl={"www.fakeUrl.com"} />
    );
    expect(wrapper).toMatchSnapshot();
  })

});