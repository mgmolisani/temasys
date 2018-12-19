import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useMedia} from './hooks/useMedia';

const App = props => {
    const matches = useMedia('(max-width: 600px)', (currentMatchValue) => console.log('The new match value is ' + currentMatchValue));
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>
                    {
                        matches
                            ? 'Matched!'
                            : 'Not a match :('
                    }
                </p>
            </header>
        </div>
    );
};

export default App;
