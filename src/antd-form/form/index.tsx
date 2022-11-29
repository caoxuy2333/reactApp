import * as React from 'react';
import type {Callbacks, FormInstance} from './interface';
import Field from './Field';
import useForm from './useForm';
import FieldContext from './FieldContest';

interface FormProps<Values = any> {
    form?: FormInstance<Values>;
    onFinish?: Callbacks<Values>['onFinish'],
    children?: any
}

let Form: React.FC<FormProps> = (props) => {
    const { children, onFinish, form } = props;
    const [formInstance] = useForm(form);
    console.log(formInstance);
    formInstance.setCallbacks({onFinish})
    return (
        <form
            onSubmit={e => {
                e.preventDefault(); 
                formInstance.submit()
            }}
        >
            <FieldContext.Provider value={formInstance}>
                 {children}
            </FieldContext.Provider>
        </form>
    )
}

export default Form;
export { Field };