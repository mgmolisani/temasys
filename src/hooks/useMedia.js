import {useEffect, useRef, useState} from 'react';

export const useMedia = (query, onChange) => {
    const mediaQueryList = useRef(window.matchMedia(query));
    const [matches, setMatches] = useState(mediaQueryList.current.matches);

    const handleMediaQuery = event => {
        setMatches(event.matches);
    };

    useEffect(() => {
            mediaQueryList.current.addListener(handleMediaQuery);

            return (() => {
                mediaQueryList.current.removeListener(handleMediaQuery);
            });
        },
        []
    );

    useEffect(() => {
        if (onChange)
            onChange(matches);
    });

    return matches;
};