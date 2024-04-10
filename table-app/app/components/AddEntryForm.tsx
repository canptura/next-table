import React from 'react'
import { Flex, Form, Input, InputNumber} from 'antd';
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

const AddEntryForm = ({onFinishCb}: Props) => {
    const [form] = Form.useForm()
    return (
        <Form
            form={form}
            initialValues={{ remember: true }}
            onFinish={(e) => {onFinishCb(e); form.resetFields()}}
            autoComplete="off"
            id='newEntryForm'
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
                            message: 'Please input a ID-number!'

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
                            max={9999}
                            type='Number'
                            changeOnWheel
                        />
                </Form.Item>

                <Form.Item<FieldType>
                    label=""
                    name="name"
                    rules={[{ required: true, message: 'Please input a name!' }]}
                >
                    <Input placeholder='Name..' maxLength={20}/>
                </Form.Item>

                <Form.Item<FieldType>
                    label=""
                    name="username"
                    rules={[{ required: true, message: 'Please input a username!' }]}
                >
                    <Input placeholder='Username..' maxLength={20}/>
                </Form.Item>
            </Flex>
        </Form>
    )
}

export default AddEntryForm