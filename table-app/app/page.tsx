'use server'
import TableComponent from "./components/TableComponent";
import path from 'path';
import fsPromises from 'fs/promises';
import AddEntryModal from "./components/AddEntryModal";
import { Space } from "antd";
import { loadUsers } from "./actions";

interface User {
  id: number;
  name: string;
  username: string;
}

export default async function Home() {

  let users: User[] = await loadUsers();

  return (
    <Space direction='vertical'>
      <h1>Sample Table</h1>
      <AddEntryModal />
      <TableComponent users={users}/>
    </Space>
  );
}
