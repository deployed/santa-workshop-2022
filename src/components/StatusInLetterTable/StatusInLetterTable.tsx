import * as React from 'react';
import post from '../../icons/post.svg';

export default function StatusInLetterTable() {
    return (
        <div style={{border: "3px solid #E0E0E0", borderRadius: '2rem', fontSize: '1.7rem', padding: '5%'}}>
            <img src={post} alt="ikona poczty" style={{width: '1.7rem',marginRight: '10%', marginLeft: '5%'}}/>Nowe
        </div>
    )
}