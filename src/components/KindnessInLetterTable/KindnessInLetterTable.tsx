import * as React from 'react';
import smile1 from '../../icons/smile-1.svg';
import smile2 from '../../icons/smile-2.svg';
import smile3 from '../../icons/smile-3.svg';
import smile4 from '../../icons/smile-4.svg';

interface TextInLetterTableProps {
    value: number
}

export default function KindnessInLetterTable({value}:TextInLetterTableProps) {
    const imageData = (() => {
        if(value === 1) return {src: smile1, alt:"sad face"};
        if(value === 2) return {src: smile2, alt:"neutral face"};
        if(value === 3) return {src: smile3, alt:"happy face"};
        return {src: smile4, alt:"amazed face"};
    })();

    return (
        <div>
            <img src={imageData.src} alt={imageData.alt} style={{width: '2rem'}}/>
        </div>
    )
}