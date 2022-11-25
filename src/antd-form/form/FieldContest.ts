import * as React from 'react';
import type {FormInstance} from './interface';

let FieldContext = React.createContext<Partial<FormInstance>>({});

export default FieldContext;