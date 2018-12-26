import React, {useEffect, useRef} from 'react';

export const Modal = (props) => {
    const {isOpen, onRequestClose} = props;
    const cancelRef = useRef();

    useEffect(() => {
            if (isOpen) {
                const currentActiveElement = document.activeElement;
                cancelRef.current.focus();

                return () => currentActiveElement.focus();
            }
        },
        [isOpen]
    );

    return (
        props.isOpen && <div>
            <button>
                OK
            </button>
            <button ref={cancelRef}
                    onClick={onRequestClose}>
                Cancel
            </button>
        </div>
    );
};