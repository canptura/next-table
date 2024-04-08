'use client'
import { Input, Table } from "antd";
import type { TableColumnsType } from 'antd';


interface User {
    id: number;
    name: string;
    username: string;
}

interface Props {
    users: User[];
}

const TableComponent = ( {users}: Props ) => {
    const innerColumns: TableColumnsType<User> = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          defaultSortOrder: 'descend',
          sorter: (a, b) => a.id - b.id,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name)
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
          sorter: (a, b) => a.username.localeCompare(b.username)
        },
      ];
    return (
        <Table dataSource={users} columns={innerColumns} rowKey="id"/>
    )
}

export default TableComponent