'use client'
import { Button, FormProps, Input, InputNumber, InputNumberProps, InputProps, Modal, Space } from 'antd'
import React, { useState } from 'react'
import AddEntryForm from './AddEntryForm';
import { saveUser } from '@/app/actions';

type FieldType = {
    id?: Number;
    name?: string;
    username?: string;
};

const AddEntryModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        console.log("okay.");
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        console.log("canceled.");
    };

    const submit = (values: FieldType) => {
        // saveUsers(JSON.stringify(values))
        console.log('in submit:',values)
        saveUser(values)
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                add entry
            </Button>
            <Modal
                width={200}
                title="New Entry"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button form='myform' key='submit' htmlType='submit'>Submit</Button>
                ]}
                >
                <AddEntryForm onFinishCb={(e: FieldType) => {submit(e); handleOk();}}/>
            </Modal>
        </>
    )
}

export default AddEntryModal