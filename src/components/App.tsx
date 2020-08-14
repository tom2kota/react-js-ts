import React from 'react';
import './App.css';
import {StandardJsComponent} from "./JS/StandardJsComponent";

function App() {
    return (
        <div className="App">
            <StandardJsComponent title="StandardJsComponent">
                <span>Hi There!</span>
            </StandardJsComponent>
        </div>
    );
}

export default App;
