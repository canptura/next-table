'use client'
import { Button, Input, InputNumber, InputNumberProps, InputProps, Modal, Space } from 'antd'
import React, { useState } from 'react'
import AddEntryForm from './AddEntryForm';

//TODO Check AddEntryModal ID
//TODO Form in modal

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
                width={360}
                >
                <AddEntryForm onFinishCb={handleOk}/>
            </Modal>
        </>
    )
}

export default AddEntryModal