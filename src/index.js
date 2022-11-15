import React from 'react';
import ReactDom from 'react-dom';
import { Index as Index1 } from './split';
import { View } from './ts/1-baseType';
import './ts/2-interface';
import './ts/3-class';
import './ts/4-function';
import './ts/6-enum';
import './ts/7-compatible';
// import './ts/9-symbol';
import './ts/10-forofforin'
import { sv } from './ts/11-module';


const Index = function () { 
    return <div>
        <Index1 />
        <View />
    </div>;
};

ReactDom.render(<Index />, document.getElementById('root'));