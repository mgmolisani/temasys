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

    const removeLayer = (layerName) => {
        setLayers(prevLayers => {
            const prevLayersCopy = {...prevLayers};

            delete prevLayersCopy[layerName];

            return prevLayersCopy;
        });
    };

    return (
        <LayerContext.Provider value={{
            layers: {
                ...higherLayers,
                ...layers
            },
            addLayer,
            removeLayer
        }}>
            {props.children}
        </LayerContext.Provider>
    );
};

export const Layer = (props) => {
    const {layerName} = props;
    return useCreateLayer(layerName);
};

export const useCreateLayer = (layerName) => {
    const [children, setChildren] = useState(null);
    const {addLayer, removeLayer} = useContext(LayerContext);

    useEffect(() => {
            addLayer(layerName, setChildren);

            return () => removeLayer(layerName);
        },
        [layerName]
    );

    return children;
};

export const useLayer = (layerName) => {
    return useContext(LayerContext).layers[layerName];
};