import React, {useEffect, useRef} from 'react';

export const Modal = (props) => {
    const cancelRef = useRef();

    useEffect(() => {
            const currentActiveElement = document.activeElement;
            cancelRef.current.focus();

            return (() => {
                currentActiveElement.focus();
            });
        },
        []);

    return (
        <div>
            <button>
                OK
            </button>
            <button ref={cancelRef}>
                Cancel
            </button>
        </div>
    );
};