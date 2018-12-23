import React, {createContext, useContext, useEffect, useState} from 'react';

export const ModalContext = createContext({
    toggleOpen: () => {
    },
    setModalChildren: () => {
    }
});

export const useModal = (modalChildren) => {
    const {toggleOpen, setModalChildren} = useContext(ModalContext);

    useEffect(() => {
            setModalChildren(modalChildren);
            console.log('I ran');
        },
        [modalChildren]);

    return toggleOpen;
};

export const ModalProvider = (props) => {
    const [open, setOpen] = useState(false);
    const [modalChildren, setModalChildren] = useState(<p>Good try boi!</p>);

    const toggleOpen = () => {
        setOpen(!open);
        return open;
    };

    return (
        <ModalContext.Provider value={{toggleOpen, setModalChildren}}>
            {props.children}
            {open && modalChildren}
        </ModalContext.Provider>
    );
};