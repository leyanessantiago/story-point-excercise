import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalText: {
    color: '#656f89',
    marginTop: 8,
    fontSize: 18,
  },
  storyPointNumberWrapper: {
    borderRadius: 100,
    borderColor: '#8a94a6',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyPointNumber: {
    color: '#8a94a6',
    fontSize: 18,
  },
  storyPointNumberWrapperSelected: {
    borderColor: '#047cf7',
    backgroundColor: '#0b55cf',
  },
  storyPointNumberSelected: {
    color: '#eff3fc',
  },
  storyPointTextSelected: {
    color: '#f7f7f9',
  },
  storyPointsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
    padding: 8,
    flexWrap: 'wrap',
  },
  storyPointElement: {
    display: 'flex',
    alignItems: 'center',
    margin: 6,
  },
  storyPointButton: {
    borderRadius: 24,
    backgroundColor: '#e7ecef',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  storyPointButtonNumberWrapper: {
    borderRadius: 100,
    borderColor: '#8e97a9',
    color: '#8e97a9',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 26,
    height: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  storyPointButtonNumber: {
    color: '#8e97a9',
  },
  storyPointButtonText: {
    color: '#8e97a9',
    fontSize: 24,
  },
});
