import React, {createContext, useContext, useEffect, useState} from 'react';

const LayerContext = createContext({
    layers: []
});

export const Stack = ({children}) => {
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
            {children}
        </LayerContext.Provider>
    );
};

export const Layer = ({layerName}) => {
    return useLayerManagement(layerName);
};

export const useLayerManagement = (layerName) => {
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

export const useSetLayerChildren = (layerName, layerChildren) => {
    const setLayer = useContext(LayerContext).layers[layerName];

    useEffect(() => {
            if (setLayer) {
                setLayer(layerChildren);
            }
        },
        [setLayer, layerChildren]
    );
};

export const AddToLayer = ({layerName, children}) => {
    useSetLayerChildren(layerName, children);

    return null;
};
