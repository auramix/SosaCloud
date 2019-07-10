const mockFunc = jest.fn((string, callback) => {
  if (string && callback) return 1;
  return -1;
});


const getRelatedTracks = jest.fn((id, callbk) => {
  mockFunc(`This is a test`, () => {})
})




exports.getRelatedTracks = getRelatedTracks;