import * as React from 'react';
import type {Callbacks, FormInstance} from './interface';
import Field from './Field';

interface FormProps<Values = any> {
    form?: FormInstance<Values>;
    onFinish?: Callbacks<Values>['onFinish'],
    children?: any
}

let Form: React.FC<FormProps> = (props) => {
    const { children, onFinish, form } = props;
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                // formInstance.submit();
            }}
        >

            {children}

        </form>
    )
}

export default Form;
export { Field };