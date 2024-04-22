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

export default async function Home() {

  let users: User[] = await loadUsers();

  return (
    <div style={{height: "100vh", padding:"1rem"}}>

    <div style={{margin: "auto", width: "50rem"}}>
      <Space direction='vertical'>
        <AddEntryModal />
        <TableComponent users={users}/>
      </Space>
    </div>
    </div>
  );
}
