import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initialState, reducer } from './contexts/reducer'
import { StateProvider } from './contexts/contextProvider'

const root = document.getElementById('root');
ReactDOM.render(
    <StateProvider initialState = {initialState} reducer = {reducer}>
        <App />
    </StateProvider>
    , root)
