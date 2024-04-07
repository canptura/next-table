'use server'
import TableComponent from "./components/TableComponent";
import path from 'path';
import fsPromises from 'fs/promises';
import type { TableColumnsType } from 'antd';

interface User {
  id: number;
  name: string;
  username: string;
}

export default async function Home() {
  let userJson = await fsPromises.readFile(path.join(process.cwd(), 'users.json'), 'utf-8');
  let users: User[] = JSON.parse(userJson);

  const columns: TableColumnsType<User> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      defaultSortOrder: 'descend',
      // sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
  ];

  return (
    <div>
      <h1>Hier ist eine Testtabelle</h1>
      <TableComponent users={users} columns={columns}/>
    </div>
  );
}
