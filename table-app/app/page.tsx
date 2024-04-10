'use server'
import TableComponent from "./components/TableComponent";
import AddEntryModal from "./components/AddEntryModal";
import { Space } from "antd";
import { loadUsers } from "./actions";

interface User {
  id: number;
  name: string;
  username: string;
}
//TODO Pagination dark mode
//Light mode background fix
export default async function Home() {

  let users: User[] = await loadUsers();

  return (
    <div style={{margin: "auto", width: "50rem"}}>
      <Space direction='vertical'>
        <h1>Sample Table</h1>
        <AddEntryModal />
        <TableComponent users={users}/>
      </Space>
    </div>
  );
}
