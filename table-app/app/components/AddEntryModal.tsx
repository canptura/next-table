'use client';
import { Button, Modal} from 'antd'
import React, { useState } from 'react'
import AddEntryForm from './AddEntryForm';
import { saveUser } from '@/app/actions';

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

type Props = {
    users: User[];
};

/** Component: containing a modal to add new entries. */
const AddEntryModal = ( {users}: Props ) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        // console.log("okay.");
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        // console.log("canceled.");
    };

    const submit = (values: FieldType) => {
        saveUser(values)
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                add entry
            </Button>
            <Modal
                width={240}
                title="New Entry"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button form='newEntryForm' key='submit' htmlType='submit'>Submit</Button>
                ]}
                >
                <AddEntryForm users={users} onFinishCb={(e: FieldType) => {submit(e); handleOk();}}/>
            </Modal>
        </>
    )
}

export default AddEntryModal