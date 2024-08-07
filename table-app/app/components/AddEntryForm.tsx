import React, { useEffect } from 'react'
import { Flex, Form, Input, InputNumber} from 'antd';
import { validateId } from '@/app/actions';

type Props = {
    onFinishCb: (values: FieldType) => void;
    users: User[];
}

type FieldType = {
    id: number;
    name: string;
    username: string;
};

type User = {
    id: number;
    name: string;
    username: string;
};


/** Component: containing a form to receive data for a new entry. Also handles the validation process. */
const AddEntryForm = ({onFinishCb, users}: Props) => {
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
                                if (users.map( (e) => e.id).indexOf(value) === -1) {
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