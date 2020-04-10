import React, {FunctionComponent} from 'react';
import {View, Text, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import CloseIcon from './CloseIcon';
import styles from './styles';

interface Props {
    isOpen: boolean;
    headerText: string;
    onClose: () => void;
}

const Modal: FunctionComponent<Props> = (props) => {
    const {isOpen, headerText, onClose, children} = props;

    const {
        modalBackDrop,
        modal,
        modalHeader,
        modalHeaderText,
    } = styles;

    return isOpen ? (
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={modalBackDrop}>
                <TouchableWithoutFeedback>
                    <View style={modal}>
                        <View style={modalHeader}>
                            <Text style={modalHeaderText}>
                                {headerText}
                            </Text>
                            <TouchableOpacity onPress={onClose}>
                                <CloseIcon />
                            </TouchableOpacity>
                        </View>
                        <View>
                            {children}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    ) : null;
};

export default Modal;
