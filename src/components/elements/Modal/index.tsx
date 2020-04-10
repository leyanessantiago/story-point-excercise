import React, {FunctionComponent, useEffect, useRef} from 'react';
import {View, Text, TouchableWithoutFeedback, TouchableOpacity, Animated} from 'react-native';
import CloseIcon from './CloseIcon';
import styles from './styles';

interface Props {
  isOpen: boolean;
  headerText: string;
  onClose: () => void;
}

const Modal: FunctionComponent<Props> = (props) => {
  const { isOpen, headerText, onClose, children } = props;

  const {
        modalBackDrop,
        modal,
        modalHeader,
        modalHeaderText,
    } = styles;

  const animatedStyle = useRef({ opacity: new Animated.Value(0) }).current;

  useEffect(() => {
    if (isOpen) {
      Animated.timing(animatedStyle.opacity, {
        toValue: 1,
        duration: 300,
      }).start();
    } else {
      animatedStyle.opacity.setValue(0);
    }
  }, [isOpen]);

  return isOpen ? (
        <TouchableWithoutFeedback onPress={onClose}>
            <Animated.View style={[modalBackDrop, animatedStyle]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[modal, animatedStyle]}>
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
                    </Animated.View>
                </TouchableWithoutFeedback>
            </Animated.View>
        </TouchableWithoutFeedback>
    ) : null;
};

export default Modal;
