import Field from './Field';
import useForm from './useForm'; 
import InternalForm from './Form';
 
type InternalFormType  = typeof InternalForm
console.log('InternalForm' ,InternalForm)

interface FormInterface extends InternalFormType {
  useForm: typeof useForm;
  Field: typeof Field;
}

let Form = InternalForm as FormInterface

console.log('InternalForm' ,Form)
export default Form;
export { Field, useForm };