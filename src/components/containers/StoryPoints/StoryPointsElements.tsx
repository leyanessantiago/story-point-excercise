import React, {FunctionComponent} from 'react';
import StoryPointElement from './StoryPointElement';

const storyPoints = [
    { value: 0, text: '10 min'},
    { value: 1, text: '30 min'},
    { value: 2, text: '1-2 hours'},
    { value: 3, text: 'Half day'},
    { value: 5, text: '1 day'},
    { value: 8, text: '1.5 days'},
    { value: 13, text: '2 days'},
    { value: 21, text: '3 days'},
];

interface Props {
    selectedValue: number;
    handleSelectStoryPoint: (value: number) => void;
}

const StoryPointsElements: FunctionComponent<Props> = (props): any => {
    const {selectedValue, handleSelectStoryPoint} = props;

    return storyPoints.map((storyPoint) => {
        const {value, text} = storyPoint;
        return (
            <StoryPointElement
                value={value}
                text={text}
                isSelected={value === selectedValue}
                handleSelectStoryPoint={handleSelectStoryPoint}
            />
        );
    });
};

export default StoryPointsElements;
