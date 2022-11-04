import * as React from 'react';

// ts 练习

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h6>Hello from {props.compiler} and {props.framework}!</h6>;
export const Index = function(){
    return <Hello compiler='广州' framework='上海'/>;
};







 
export default {Hello,Index}