import React, {createContext, useContext, useEffect, useState} from 'react';

const LayerContext = createContext({
    layers: []
});

export const Stack = (props) => {
    const [layers, setLayers] = useState({});
    const {layers: higherLayers} = useContext(LayerContext);

    const addLayer = (layerName, setLayer) => {
        setLayers(prevLayers => ({
            ...prevLayers,
            [layerName]: setLayer
        }));
    };

    return (
        <LayerContext.Provider value={{
            layers: {
                ...higherLayers,
                ...layers
            },
            addLayer
        }}>
            {props.children}
        </LayerContext.Provider>
    );
};

export const Layer = (props) => {
    const [children, setChildren] = useState(null);
    const {addLayer} = useContext(LayerContext);

    useEffect(() => {
            addLayer(props.layerName, setChildren);
        },
        [props.layerName]
    );

    return children;
};

export const useLayer = (layerName) => {
    return useContext(LayerContext).layers[layerName];
};