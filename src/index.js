import React from 'react';
import ReactDom from 'react-dom';
import { Index as Index1 } from './split';
import { View } from './ts/1-baseType';
import './ts/2-interface';
import './ts/3-class';
import './ts/4-function';
import './ts/6-enum';
import './ts/7-compatible';


const Index = function () {
    return <div>
        <Index1 />
        <View />
    </div>;
};

ReactDom.render(<Index />, document.getElementById('root'));