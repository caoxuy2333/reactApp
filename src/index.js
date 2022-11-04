import React from 'react';
import ReactDom from 'react-dom';
import { Index as Index1 } from './split';
import {View} from './ts/baseType';


const Index = function () {
    return <div>
        <Index1 />
        <View />
    </div>;
};

ReactDom.render(<Index />, document.getElementById('root'));