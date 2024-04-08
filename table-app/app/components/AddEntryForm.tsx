import React from 'react'
import { Button, Checkbox, Flex, Form, type FormProps, Input, InputNumber, Space } from 'antd';

type FieldType = {
    id?: Number;
    name?: string;
    username?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const AddEntryForm = () => {
    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            id='myform'
        >
            <Flex vertical>

                <Form.Item<FieldType>
                    label=""
                    name="id"
                    rules={[{ required: true, message: 'Please input a ID!' }]}
                >
                    <InputNumber 
                            placeholder='ID..' 
                            min={0}
                            type='Number'
                            changeOnWheel
                        />
                </Form.Item>

                <Form.Item<FieldType>
                    label=""
                    name="name"
                    rules={[{ required: true, message: 'Please input a name!' }]}
                >
                    <Input 
                        placeholder='Name..'
                    />
                </Form.Item>

                <Form.Item<FieldType>
                    label=""
                    name="username"
                    rules={[{ required: true, message: 'Please input a username!' }]}
                >
                    <Input 
                        placeholder='Username..'
                    />
                </Form.Item>

            </Flex>
        </Form>
    )
}

export default AddEntryForm