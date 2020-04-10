import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modalText: {
        color: '#656f89',
        marginTop: '8px',
        fontSize: 18,
    },
    storyPointNumber: {
        borderRadius: 100,
        borderColor: '#8a94a6',
        color: '#8a94a6',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
    },
    storyPointNumberSelected: {
        borderColor: '#047cf7',
        color: '#eff3fc',
        backgroundColor: '#0b55cf',
    },
    storyPointTextSelected: {
        color: '#f7f7f9',
    },
    storyPointsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '24px',
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
    storyPointButtonNumber: {
        borderRadius: 100,
        borderColor: '#8e97a9',
        color: '#8e97a9',
        borderStyle: 'solid',
        borderWidth: 2,
        width: '26px',
        height: '26px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    storyPointButtonText: {
        color: '#8e97a9',
        fontSize: 24,
    },
});