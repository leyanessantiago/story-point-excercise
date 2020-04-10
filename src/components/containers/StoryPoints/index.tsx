import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Modal from '../../elements/Modal';
import StoryPointsElements from './StoryPointsElements';
import { connect } from 'react-redux';
import {
    openStoryPointModal,
    closeStoryPointModal,
    handleSelectStoryPoint,
} from '../../../redux/actions/story-point';

interface Props {
    isModalOpen?: boolean;
    storyPointSelectedValue?: number;
    openStoryPointModal?: () => void;
    closeStoryPointModal?: () => void;
    handleSelectStoryPoint?: (value: number) => void;
}

const StoryPoints: FunctionComponent<Props> = (props) => {
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
        storyPointButtonText,
    } = styles;

    return (
        <>
            <TouchableOpacity style={storyPointButton} onPress={openStoryPointModal}>
                <Text style={storyPointButtonNumber}>{storyPointSelectedValue}</Text>
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
    const { storyPoint } = state;
    return {...storyPoint};
};

const mapDispatchToProps = {
    openStoryPointModal,
    closeStoryPointModal,
    handleSelectStoryPoint,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryPoints);
