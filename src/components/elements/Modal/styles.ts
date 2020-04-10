import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalBackDrop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(82, 95, 127, 0.3)',
    position: 'absolute',
    zIndex: 100,
  },
  modal: {
    backgroundColor: '#09153f',
    borderRadius: 8,
    padding: 12,
    margin: 24,
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    color: 'white',
    fontSize: 24,
  },
});
