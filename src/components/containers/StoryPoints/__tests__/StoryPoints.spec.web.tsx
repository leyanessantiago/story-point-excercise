import React from 'react';
import { StoryPoints } from '../';
import { mount } from 'enzyme';

describe('story points component', () => {
  it('should pass the right props', () => {
    const handleSelectStoryPoint = jest.fn();
    const closeStoryPointModal = jest.fn();
    const openStoryPointModal = jest.fn();
    const component = mount(
      <StoryPoints
        handleSelectStoryPoint={handleSelectStoryPoint}
        closeStoryPointModal={closeStoryPointModal}
        openStoryPointModal={openStoryPointModal}
        isModalOpen
        storyPointSelectedValue={2}
      />,
    );

    const button = component.find('TouchableOpacity[testID="story-points-button"]');
    const modal = component.find('Modal');
    const storyPointsElements = component.find('StoryPointsElements');
    // @ts-ignore
    expect(modal.props().isOpen).toBe(true);
    // @ts-ignore
    expect(button.props().onPress).toEqual(openStoryPointModal);
    // @ts-ignore
    expect(storyPointsElements.props().handleSelectStoryPoint).toEqual(handleSelectStoryPoint);
    // @ts-ignore
    expect(storyPointsElements.props().selectedValue).toEqual(2);
  });
});
