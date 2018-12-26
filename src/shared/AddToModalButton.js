import React, {useEffect, useState} from 'react';
import {useLayer} from '../hooks/useLayer';
import {Modal} from './Modal';

export const AddToModalButton = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const setModal = useLayer('modal');

    const toggleModalOpen = () => {
        setModalOpen(prevIsModalOpen => !prevIsModalOpen);
    };

    useEffect(() => {
        if (setModal) {
            setModal(<Modal isOpen={isModalOpen}
                            onRequestClose={toggleModalOpen}/>);
        }
    });

    return <button onClick={toggleModalOpen}>
        Add to the modal Layer!
    </button>;
};