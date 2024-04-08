'use server'
import TableComponent from "./components/TableComponent";
import path from 'path';
import fsPromises from 'fs/promises';
import AddEntryModal from "./components/AddEntryModal";
import { Space } from "antd";

interface User {
  id: number;
  name: string;
  username: string;
}

export default async function Home() {

  let userJson = await fsPromises.readFile(path.join(process.cwd(), 'users.json'), 'utf-8');
  let users: User[] = await JSON.parse(userJson);

  return (
    <div>
      <Space direction='vertical'>
        <h1>Sample Table</h1>
        <AddEntryModal />
        <TableComponent users={users}/>
      </Space>
    </div>
  );
}
