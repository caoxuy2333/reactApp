import * as React from 'react';
import Form, { Field, useForm } from '../antd-form/form/index';
import fly from 'flyio'

interface user {
  username: string;
  password: string;
}

const Index: React.FC = function (): JSX.Element {
  const [form] = useForm();
  const onSubmit = async function (values: user) {
    console.log(values)

    const res = await fly.get('a/login');
    console.log('res', res)
    if (res.code === '0') window.sessionStorage.setItem('token', res.data.token)
    else window.sessionStorage.removeItem('token')
  }
  return (
    <div>
      <Form
        form={form}
        onFinish={onSubmit}
      >
        <Field name='username'>
          <input type="text" />
        </Field>

        <Field name='password'>
          <input type="password" />
        </Field>
        <button type="submit">
          Submit
        </button>
      </Form>
    </div>
  )
}

export default Index;