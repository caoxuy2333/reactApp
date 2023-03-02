import * as React from 'react';
import Form, { Field, useForm } from './form/index'
import fly from 'flyio'
import Animista from "react-animista";
// import request from 'request';

console.log('cxy', Animista)
console.log('cxy', fly)

const Index: React.FC = function (): JSX.Element {
  let [form] = useForm();
  return (
    <div>
      form表单:
      <hr />
      <Form
        form={form}
        onFinish={(values) => {
          console.log('values', values)
          fly.get('a/login').then((res: any) => {
            console.log('res', res)
          }).catch((err: any) => {
            console.log(err);
          }); 
        }}
        onFinishFailed={(error) => {
          console.log('error', error)
        }}
      >
        <Field
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <input />
        </Field>

        <Field
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <input />
        </Field>
        <Field
          name="age"
          rules={[{ required: true, message: 'Please input your age!' }]}
        >
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </Field>
        <button type="submit">
          Submit
        </button>
      </Form>
    </div>
  )
}

export default Index;