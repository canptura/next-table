'use client'
import { Button, FormProps, Input, InputNumber, InputNumberProps, InputProps, Modal, Space } from 'antd'
import React, { useState } from 'react'
import AddEntryForm from './AddEntryForm';
import { saveUsers } from '@/app/actions';

//TODO Check AddEntryModal ID
//TODO diff require/import
//TODO storing of new data

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
        saveUsers(values)
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                add entry
            </Button>
            <Modal
                title="New Entry"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button form='myform' key='submit' htmlType='submit'>Submit</Button>
                ]}
                width={200}
                >
                <AddEntryForm onFinishCb={(e: FieldType) => {submit(e); handleOk();}}/>
            </Modal>
        </>
    )
}

export default AddEntryModal