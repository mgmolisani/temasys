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
                <svg viewBox={'0 0 100 100'}
                     width={200}
                     height={200}>
                    <defs>
                        <linearGradient id={'blue-gradient'}>
                            <stop offset={'0.25'}
                                  stopColor={'darkred'}/>
                            <stop offset={'0.45'}
                                  stopColor={'white'}/>
                            <stop offset={'0.55'}
                                  stopColor={'white'}/>
                            <stop offset={'0.75'}
                                  stopColor={'darkred'}/>
                        </linearGradient>
                        <pattern id="blue-band"
                                 patternUnits="userSpaceOnUse"
                                 x={0} width="100%" height="100%">
                            <rect width="100%" height="100%"
                                  fill="url(#blue-gradient)"/>
                            <animate attributeName={'x'} from={0} to={100} repeatCount={'indefinite'} dur={'2s'}/>
                        </pattern>
                        <linearGradient id={'red-gradient'}>
                            <stop offset={'0.25'}
                                  stopColor={'darkred'}/>
                            <stop offset={'0.45'}
                                  stopColor={'white'}/>
                            <stop offset={'0.55'}
                                  stopColor={'white'}/>
                            <stop offset={'0.75'}
                                  stopColor={'darkred'}/>
                        </linearGradient>
                        <pattern id="red-band"
                                 patternUnits="userSpaceOnUse"
                                 x={0} width="100%" height="100%">
                            <rect width="100%" height="100%"
                                  fill="url(#red-gradient)"/>
                            <animate attributeName={'x'} from={0} to={100} repeatCount={'indefinite'} dur={'2s'}/>
                        </pattern>
                    </defs>
                    <g transform="translate(22.5 22.5) rotate(45 27.5 27.5)">
                        <g fill={'url(#blue-band)'}
                           transform="rotate(270 12.5 12.5)">
                            <rect x={0} width={25} y={0} height={5}/>
                            <rect x={0} width={25} y={10} height={5}/>
                            <rect x={0} width={25} y={20} height={5}/>
                        </g>
                        <g fill={'url(#red-band)'}
                           transform="translate(0 30) rotate(180 12.5 12.5)">
                            <rect x={0} width={25} y={0} height={5}/>
                            <rect x={0} width={25} y={10} height={5}/>
                            <rect x={0} width={25} y={20} height={5}/>
                        </g>
                        <g fill={'url(#red-band)'}
                           transform="translate(30 0) rotate(180 12.5 12.5)">
                            <rect x={0} width={25} y={0} height={5}/>
                            <rect x={0} width={25} y={10} height={5}/>
                            <rect x={0} width={25} y={20} height={5}/>
                        </g>
                        <g fill={'url(#blue-band)'}
                           transform="translate(30 30) rotate(270 12.5 12.5)">
                            <rect x={0} width={25} y={0} height={5}/>
                            <rect x={0} width={25} y={10} height={5}/>
                            <rect x={0} width={25} y={20} height={5}/>
                        </g>
                    </g>
                </svg>
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
