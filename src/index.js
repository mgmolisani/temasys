import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Layer, Stack} from './hooks/useLayer';
import {AddToModalButton} from './shared/AddToModalButton';

ReactDOM.render(
        <Stack>
            <App/>
            <AddToModalButton/>
            <Layer layerName={'modal'}/>
            <Layer layerName={'tooltip'}/>
        </Stack>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
