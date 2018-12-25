import React, {useEffect} from 'react';
import {useLayer} from '../hooks/useLayer';

export const AddToModalButton = (props) => {
    const setLayer = useLayer('modal');

    useEffect(() => {
        console.log('Yes, I do.');
        if (setLayer) {
            setLayer(<p>Does this run infinitely?</p>)
        }
    });

    return <button onClick={() => {
        setLayer(<p>This goes in the modal layer.</p>)
    }}>
        Add to the modal Layer!
    </button>
};