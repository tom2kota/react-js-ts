import React from 'react';
import './App.css';
import {StandardJsComponent} from "./JS/StandardJsComponent";
import {StandardJsComponentOptimized} from "./JS/StandardJsComponentOptimized";
import {StandardTsComponent} from "./TS/StandardTsComponent";
import {StandardTsComponentOptimized} from "./TS/StandardTsComponentOptimized";
import {SpreadingTs} from "./TS/SpreadingTs";
import {EventHandlerTs} from "./TS/EventHandlerTs";
import {GenericsTs} from "./TS/generic/GenericsTs";
import {HooksTs} from "./TS/hooks/refs";
import {ButtonStyle} from "./TS/ButtonStyle";

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
        <SpreadingTs>
            <span>Hi There!</span>
        </SpreadingTs>
        <EventHandlerTs onClick={e => console.log(e.type, 'clicked!')}/>
        <hr/>
        <GenericsTs items={[1, 2, 3, 4, 5]}>
            {item => `${item * item} ... `}
        </GenericsTs>
        <hr/>

        <HooksTs/>
        <hr/>
        {/*<ReducerTs query={""}/>*/}
        <ButtonStyle type={"primary"}/>
        <ButtonStyle type='danger'/>
    </div>
)