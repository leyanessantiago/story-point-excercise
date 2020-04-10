import React, { FunctionComponent, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Modal from '../../elements/Modal';

interface Props {
  value: number;
  text: string;
  isSelected?: boolean;
  handleSelectStoryPoint: (value: number) => void;
}

const StoryPointElement: FunctionComponent<Props> = (props) => {
  const { value, text, isSelected, handleSelectStoryPoint } = props;

  const {
    modalText,
    storyPointNumber,
    storyPointNumberWrapper,
    storyPointNumberWrapperSelected,
    storyPointElement,
    storyPointNumberSelected,
    storyPointTextSelected,
  } = styles;

  const getStoryPointNumberWrapperStyles = () => {
    return [
      storyPointNumberWrapper,
      isSelected && storyPointNumberWrapperSelected,
    ];
  };

  const getStoryPointNumberStyles = () => {
    return [
      storyPointNumber,
      isSelected && storyPointNumberSelected,
    ];
  };

  const getStoryPointTextStyles = () => {
    return [
      modalText,
      isSelected && storyPointTextSelected,
    ];
  };

  return (
    <TouchableOpacity style={storyPointElement} onPress={() => handleSelectStoryPoint(value)}>
      <View style={getStoryPointNumberWrapperStyles()}>
        <Text style={getStoryPointNumberStyles()}>{value}</Text>
      </View>
      <Text style={getStoryPointTextStyles()}>{text}</Text>
    </TouchableOpacity>
  );
};

export default StoryPointElement;
