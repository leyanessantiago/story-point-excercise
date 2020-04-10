import React from 'react';
import StoryPointElement from '../StoryPointElement';
import styles from '../styles';
import { mount } from 'enzyme';

const {
  modalText,
  storyPointNumber,
  storyPointNumberWrapper,
  storyPointNumberWrapperSelected,
  storyPointNumberSelected,
  storyPointTextSelected,
} = styles;

describe('story point element component', () => {
  it('should call the handleSelectStoryPoint function passed with the right param', () => {
    const handleSelectStoryPoint = jest.fn();
    const component = mount(
      <StoryPointElement
        handleSelectStoryPoint={handleSelectStoryPoint}
        value={1}
        text="30 min"
        isSelected={false}
      />,
    );

    // @ts-ignore
    component.find('TouchableOpacity').props().onPress();
    expect(handleSelectStoryPoint).toHaveBeenCalledWith(1);
  });

  it('should pass the right styles when is selected', () => {
    const handleSelectStoryPoint = jest.fn();
    const component = mount(
      <StoryPointElement
        handleSelectStoryPoint={handleSelectStoryPoint}
        value={1}
        text="30 min"
        isSelected
      />,
    );

    const numberWrapperStyles = component.find('TouchableOpacity > View View').props().style;
    const numberStyles = component.find('TouchableOpacity > View View Text').props().style;
    const textStyles = component.find('TouchableOpacity > View > div > Text').props().style;
    expect(numberWrapperStyles).toEqual([storyPointNumberWrapper, storyPointNumberWrapperSelected]);
    expect(numberStyles).toEqual([storyPointNumber, storyPointNumberSelected]);
    expect(textStyles).toEqual([modalText, storyPointTextSelected]);
  });
});
