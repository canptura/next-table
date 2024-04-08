'use client'
import { Button, Input, Modal, Space } from 'antd'
import React, { useState } from 'react'

const AddEntry = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                add entry
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Adding new entry:</p>
                <Space>
                    <Input placeholder='ID..' type='Number'></Input>
                    <Input placeholder='name..'></Input>
                    <Input placeholder='username..'></Input>
                </Space>
            </Modal>
        </>
    )
}

export default AddEntry