import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import Modal from '../../elements/Modal';
import StoryPointsElements from './StoryPointsElements';
import { connect } from 'react-redux';
import {
  openStoryPointModal as openStoryPointModalAction,
  closeStoryPointModal as closeStoryPointModalAction,
  handleSelectStoryPoint as handleSelectStoryPointAction,
} from '../../../redux/actions/story-point';

interface Props {
  isModalOpen: boolean;
  storyPointSelectedValue: number;
  openStoryPointModal: () => void;
  closeStoryPointModal: () => void;
  handleSelectStoryPoint: (value: number) => void;
}

export const StoryPoints: FunctionComponent<Props> = (props) => {
  const {
    isModalOpen,
    storyPointSelectedValue,
    openStoryPointModal,
    closeStoryPointModal,
    handleSelectStoryPoint,
  } = props;

  const {
    modalText,
    storyPointsWrapper,
    storyPointButton,
    storyPointButtonNumber,
    storyPointButtonNumberWrapper,
    storyPointButtonText,
  } = styles;

  return (
    <>
      <TouchableOpacity testID="story-points-button" style={storyPointButton} onPress={openStoryPointModal}>
        <View style={storyPointButtonNumberWrapper}>
          <Text style={storyPointButtonNumber}>{storyPointSelectedValue}</Text>
        </View>
        <Text style={storyPointButtonText}>Points</Text>
      </TouchableOpacity>
      <Modal isOpen={isModalOpen} headerText="Story Point Estimation" onClose={closeStoryPointModal}>
        <Text style={modalText}>Select an estimation for your task</Text>
        <View style={storyPointsWrapper}>
          <StoryPointsElements
            selectedValue={storyPointSelectedValue}
            handleSelectStoryPoint={handleSelectStoryPoint}
          />
        </View>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: { storyPoint: any; }) => {
  return state.storyPoint;
};

const mapDispatchToProps = {
  openStoryPointModal: openStoryPointModalAction,
  closeStoryPointModal: closeStoryPointModalAction,
  handleSelectStoryPoint: handleSelectStoryPointAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryPoints);
