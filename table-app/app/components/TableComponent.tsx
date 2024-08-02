'use client';
import { Table } from "antd";
import type { TableColumnsType } from 'antd';
import { removeUser } from "@/app/actions";


type FieldType = {
    id: number;
    name: string;
    username: string;
};

type Props = {
    users: FieldType[];
}

/** Component: containing the table which shows the loaded data. The table is sortable by each of its columns. */
const TableComponent = ( {users}: Props ) => {
    const columns: TableColumnsType<FieldType> = [
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
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <a onClick={ () => removeUser(record.id)} className="deleteButton" >delete</a>
          )
        }
      ];
    return (
      <>
        <Table dataSource={users} columns={columns} rowKey="id" style={{width: "50rem"}} pagination={{style:{colorScheme:""}}}/>
      </>
    )
}

export default TableComponent