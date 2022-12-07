import * as React from 'react';
import type { Callbacks, FormInstance } from './interface';
import Field from './Field';
import useForm from './useForm';
import FieldContext from './FieldContest';

interface FormProps<Values = any> {
  form?: FormInstance<Values>;
  onFinish?: Callbacks<Values>['onFinish'],
  onFinishFailed?: Callbacks<Values>['onFinishFailed'],
  children?: any
}

let Form: React.FC<FormProps> = (props) => {
  const { children, onFinish, onFinishFailed, form } = props;
  console.log('form', form)
  const [formInstance] = useForm(form);
  console.log(formInstance);
  formInstance.setCallbacks({ onFinish, onFinishFailed })
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