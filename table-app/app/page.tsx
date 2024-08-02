'use server';
import TableComponent from "./components/TableComponent";
import AddEntryModal from "./components/AddEntryModal";
import { Space, Col, Row } from "antd";
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
        <Row align={"stretch"}>
          <Col span={12}>
            <h1>Sample Table</h1>
          </Col>
          <Col span={12} style={{textAlign:"right"}}>
            <AddEntryModal users={users}/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <TableComponent users={users}/>
          </Col>
        </Row>
      </div>
    </div>
  );
}
