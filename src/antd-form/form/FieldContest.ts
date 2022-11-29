import * as React from 'react';
import type { FormInstance } from './interface';

let FieldContext = React.createContext<Partial<FormInstance>>({});

console.log('FieldContext', FieldContext)
export default FieldContext;