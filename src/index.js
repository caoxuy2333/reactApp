import React from 'react';
import ReactDom from 'react-dom';

const Index=function(){
    console.log(3)
    return <div>3</div>
}

ReactDom.render(<Index />, document.getElementById('root'))