import React from 'react';
import { Input, Table } from "antd";
import type { TableColumnsType } from 'antd';


interface User {
    id: number;
    name: string;
    username: string;
}

interface Props {
    users: User[];
    columns: TableColumnsType<User>;
}

const TableComponent = ( {users, columns}: Props ) => {
    return (
        <div>
            <Input placeholder='ID' />
            <Input placeholder='Name' />
            <Input placeholder='Username' />
            <Table dataSource={users} columns={columns} rowKey="id"/>
        </div>
    )
}

export default TableComponent