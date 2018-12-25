import React from 'react';
import './App.css';
import Header from './shared/Header';
import Spinner from './brand/Spinner';

const App = props => {
    return (
        <div>
            <Header/>
            <Spinner/>
        </div>
    );
};

export default App;
