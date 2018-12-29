import React from 'react';
import './App.css';
import Header from './shared/Header';

import Spinner from './brand/Spinner';
import {useLayerManagement} from './hooks/useSetLayer';

const App = props => {
    const modalLayer = useLayerManagement('modal');

    return (
        <div>
            <Header/>
            <Spinner/>
            {modalLayer}
        </div>
    );
};

export default App;
