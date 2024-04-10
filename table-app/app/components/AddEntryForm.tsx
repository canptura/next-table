import React from 'react'
import { Button, Checkbox, Flex, Form, type FormProps, Input, InputNumber, Space } from 'antd';
import { validateId } from '../actions';

interface Props{
    onFinishCb: (values: FieldType) => void;
    // validateId: (id: number) => boolean;
}

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

const AddEntryForm = ({onFinishCb}: Props) => {
    const [form] = Form.useForm()
    return (
        <Form
            name="basic"
            // wrapperCol={{ span: 22 }}
            // style={{ maxWidth: 600 }}
            form={form}
            initialValues={{ remember: true }}
            onFinish={(e) => {onFinish(e); onFinishCb(e); form.resetFields()}}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            id='myform'
        >
            <Flex vertical>

                <Form.Item<FieldType>
                    hasFeedback
                    label=""
                    name="id"
                    validateDebounce={1000}
                    rules={[
                        {
                            required: true,
                            message: 'Please input a ID!'

                        },
                        {
                            message: 'ID already taken!',
                            validator: async (_, value) => {
                                if (await validateId(value)) {
                                    return Promise.resolve();
                                } else {
                                    return Promise.reject('some MSG');
                                }
                            }
                        }
                    ]}
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