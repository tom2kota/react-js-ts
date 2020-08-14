import React from 'react';
import './App.css';
import {StandardJsComponent} from "./JS/StandardJsComponent";
import {StandardJsComponentOptimized} from "./JS/StandardJsComponentOptimized";
import {StandardTsComponent} from "./TS/StandardTsComponent";
import {StandardTsComponentOptimized} from "./TS/StandardTsComponentOptimized";

export const App = () => (
    <div className="App">
        <h1>JavaScript</h1>
        <StandardJsComponent title="StandardJsComponent">
            <span>Hi There!</span>
        </StandardJsComponent>
        <StandardJsComponentOptimized>
            <span>Hi There!</span>
        </StandardJsComponentOptimized>
        <h1>TypeScript</h1>
        <StandardTsComponent title="StandardTsComponent">
            <span>Hi There!</span>
        </StandardTsComponent>
        <StandardTsComponentOptimized>
            <span>Hi There!</span>
        </StandardTsComponentOptimized>
    </div>
)