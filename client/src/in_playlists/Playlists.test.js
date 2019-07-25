import Playlists from './Playlists.jsx';

describe('Playlists', () => {
  // Snapshot test
  it('Has expected snapshot output', () => {
    const wrapper = shallow( <
      Playlists renderPlaylists = {
        () => {}
      }
      />, {disableLifecycleMethods: true}
    );
    expect(wrapper).toMatchSnapshot();
  })

});