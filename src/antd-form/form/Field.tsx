import * as React from 'react';
import { ChangeEvent } from 'react'
import { NamePath, Rule } from './interface';
import FieldContext from './FieldContest';

type FieldProps = {
    name: NamePath;
    rules?: Rule[];
    children: JSX.Element,
}

const Field: React.FC<FieldProps> = (props) => { 
    const { getFieldValue, setFieldsValue, registerFieldEntities } = React.useContext(FieldContext);
    const { children, name } = props; 
    React.useLayoutEffect(()=>{
        const unregister = registerFieldEntities && registerFieldEntities({
            props,

        })
        return unregister;
    }, [])
    const getControlled = () => {
        return {
            value: getFieldValue && getFieldValue(name),
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
                const newValue = e?.target?.value;
                console.log('change')
                setFieldsValue?.({ [name]: newValue })
            }
        }
    }
    return React.cloneElement(children, getControlled());
}

export default Field;