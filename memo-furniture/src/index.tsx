import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    message: string;
}

const App: React.FC<AppProps> = ({ message }) => {
    return <h1>{message}</h1>;
};

ReactDOM.render(
    <App message='Hello, world!' />,
    document.getElementById('root')
);