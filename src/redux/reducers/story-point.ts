import {
  OPEN_STORY_POINT_MODAL,
  CLOSE_STORY_POINT_MODAL,
  HANDLE_SELECT_STORY_POINT,
} from '../actions/story-point';

const initialState = {
  isModalOpen: false,
  storyPointSelectedValue: 1,
};

export default function storyPoint(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case OPEN_STORY_POINT_MODAL: {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case CLOSE_STORY_POINT_MODAL: {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    case HANDLE_SELECT_STORY_POINT: {
      return {
        isModalOpen: false,
        storyPointSelectedValue: payload,
      };
    }
    default:
      return state;
  }
}
