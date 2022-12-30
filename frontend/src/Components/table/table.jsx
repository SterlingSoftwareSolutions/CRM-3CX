import React from "react";
import { Table, Row } from "antd";
import "./table";

const CommonTable = ({ users, columns }) => {
  console.log(users);

  return (
    <Row>
      <Table
        bordered={true}
        className="table"
        columns={columns}
        dataSource={users}
        scroll={{ x: 100, y: 440 }}
      />
    </Row>
  );
};

export default CommonTable;
