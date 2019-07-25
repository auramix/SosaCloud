import SinglePlaylist from './SinglePlaylist.jsx';

describe('SinglePlaylist', () => {
  it('Has correct number of children', () => {
    const wrapper = shallow( < SinglePlaylist playlist = {
      {
        playlistImgUrl: 'value'
      }
    }/>);

    expect(wrapper.children()).toHaveLength(1);
  });

  // Snapshot test
  it('Has expected snapshot output', () => {
    const wrapper = shallow( < SinglePlaylist playlist = {
        {
          playlistImgUrl: 'value'
        }
      }/>
    );
    expect(wrapper).toMatchSnapshot();
  })

});