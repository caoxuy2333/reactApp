import * as React from 'react';
import Form, { Field, useForm } from './form/index'

const Index: React.FC = function ():JSX.Element {
  let [form] = useForm();
  return (
    <div>
      form表单:
      <hr />
      <Form
        form={form}
        onFinish={(values) => {
          console.log('values', values)
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

        <button type="submit">
          Submit
        </button>
      </Form>
      <Field
        name="age"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >

        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </Field>
    </div>


  )
}

export default Index;