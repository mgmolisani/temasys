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
    return useCreateLayer(layerName);
};

export const useCreateLayer = (layerName) => {
    const [children, setChildren] = useState(null);
    const {addLayer, removeLayer} = useContext(LayerContext);

    useEffect(
        () => {
            addLayer(layerName, setChildren);

            return () => removeLayer(layerName);
        },
        [layerName]
    );

    return children;
};

export const useRenderToLayer = (layerName, layerChildren) => {
    const setLayer = useContext(LayerContext).layers[layerName];

    useEffect(
        () => {
            if (setLayer) {
                setLayer(layerChildren);
            } else {
                console.warn(`The "${layerName}" layer has either not mounted yet or does not exist in a Stack containing this component. If you expected the "${layerName}" layer to have already mounted in a Stack containing this component, verify the correct "layerName" was used.`);
            }
        },
        [setLayer, layerName, layerChildren]
    );
};

export const AddToLayer = ({layerName, children}) => {
    useRenderToLayer(layerName, children);

    return null;
};
