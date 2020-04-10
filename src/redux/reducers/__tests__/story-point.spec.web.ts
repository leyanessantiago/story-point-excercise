import {
  OPEN_STORY_POINT_MODAL,
  CLOSE_STORY_POINT_MODAL,
  HANDLE_SELECT_STORY_POINT,
} from '../../actions/story-point';
import storyPoint from '../story-point';

const initialState = {
  isModalOpen: false,
  storyPointSelectedValue: 1,
};

describe('story point reducer', () => {
  it('should set the right state if receives an action of type OPEN_STORY_POINT_MODAL', () => {
    const finalState = storyPoint(
      initialState,
      {
        type: OPEN_STORY_POINT_MODAL,
      },
    );

    expect(finalState).toEqual({ isModalOpen: true, storyPointSelectedValue: 1 });
  });

  it('should set the right state if receives an action of type CLOSE_STORY_POINT_MODAL', () => {
    const finalState = storyPoint(
      initialState,
      {
        type: CLOSE_STORY_POINT_MODAL,
      },
    );

    expect(finalState).toEqual({ isModalOpen: false, storyPointSelectedValue: 1 });
  });

  it('should set the right state if receives an action of type HANDLE_SELECT_STORY_POINT', () => {
    const finalState = storyPoint(
      {
        ...initialState,
        isModalOpen: true,
      },
      {
        type: HANDLE_SELECT_STORY_POINT,
        payload: 5,
      },
    );

    expect(finalState).toEqual({ isModalOpen: false, storyPointSelectedValue: 5 });
  });

  it('should return the same state if it receives a random non mapped action', () => {
    const finalState = storyPoint(
      initialState,
      {
        type: 'RANDOM_ACTION',
        payload: 5,
      },
    );

    expect(finalState).toEqual(initialState);
  });
});
