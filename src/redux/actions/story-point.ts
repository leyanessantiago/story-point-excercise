export const OPEN_STORY_POINT_MODAL = 'OPEN_STORY_POINT_MODAL';
export function openStoryPointModal() {
  return (dispatch: any) => { dispatch({ type: OPEN_STORY_POINT_MODAL }); };
}

export const CLOSE_STORY_POINT_MODAL = 'CLOSE_STORY_POINT_MODAL';
export function closeStoryPointModal() {
  return (dispatch: any) => { dispatch({ type: CLOSE_STORY_POINT_MODAL }); };
}

export const HANDLE_SELECT_STORY_POINT = 'HANDLE_SELECT_STORY_POINT';
export function handleSelectStoryPoint(value: number) {
  return (dispatch: any) => {
    dispatch({
      type: HANDLE_SELECT_STORY_POINT,
      payload: value,
    });
  };
}
