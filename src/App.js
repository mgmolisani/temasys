import React, {useState} from 'react';
import './App.css';
import {useMedia} from './hooks/useMedia';
import Header from './shared/Header';

const App = props => {
    const [query, setQuery] = useState('(max-width: 600px)');
    const matches = useMedia(query);
    const toggleQuery = () => {
        if (query === '(max-width: 600px)') {
            setQuery('(max-width: 1200px)');
        } else {
            setQuery('(max-width: 600px)');
        }
    };
    return (
        <div>
            <Header/>
            <header className="App-header">
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
                <button onClick={toggleQuery}>
                    Current Query: {query}
                </button>
            </header>
        </div>
    );
};

export default App;
