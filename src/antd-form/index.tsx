import * as React from 'react';
import Form, { Field } from './form/index'

const Index = function () {
    return (
        <Form
            onFinish={(values) => {
                console.log('values', values)
            }}
        >
            <Field 
                name="username"
                // rules={[{ required: true, message: 'Please input your username!' }]}
            >

            </Field>

            <Field 
                name="password"
                // rules={[{ required: true, message: 'Please input your password!' }]}
            >

            </Field>

            <button type="submit">
                Submit
            </button>
        </Form>

    )
}

export default Index;