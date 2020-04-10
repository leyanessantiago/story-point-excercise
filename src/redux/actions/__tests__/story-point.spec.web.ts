import {
  openStoryPointModal,
  closeStoryPointModal,
  handleSelectStoryPoint,
} from '../story-point';

describe('story point actions', () => {
  it('should dispatch OPEN_STORY_POINT_MODAL', () => {
    const dispatch = jest.fn();
    openStoryPointModal()(dispatch);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'OPEN_STORY_POINT_MODAL' });
  });
  it('should dispatch CLOSE_STORY_POINT_MODAL', () => {
    const dispatch = jest.fn();
    closeStoryPointModal()(dispatch);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CLOSE_STORY_POINT_MODAL' });
  });
  it('should dispatch HANDLE_SELECT_STORY_POINT with the right payload', () => {
    const dispatch = jest.fn();
    handleSelectStoryPoint(1)(dispatch);
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: 'HANDLE_SELECT_STORY_POINT',
      payload: 1,
    });
  });
});
