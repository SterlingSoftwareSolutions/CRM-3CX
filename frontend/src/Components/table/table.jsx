import React from "react";
// import Tablee from "react-bootstrap/Table";
import { Space, Table, Tag } from "antd";
import "./table";

const CommonTable = ({ users }) => {

    console.log(users);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "brand",
      dataIndex: "brand",
      key: "age",
    },
    {
      title: "brand_availability",
      dataIndex: "brand_availability",
      key: "address",
    },
    {
        title: "product_category",
        dataIndex: "product_category",
        key: "address",
      },
      {
        title: "action",
        dataIndex: "action",
        key: "address",
      },
      {
        title: "status_remark",
        dataIndex: "status_remark",
        key: "address",
      },
      {
        title: "open",
        dataIndex: "open",
        key: "address",
      },
      {
        title: "user_id",
        dataIndex: "user_id",
        key: "address",
      },
      {
        title: "customer_id",
        dataIndex: "customer_id",
        key: "address",
      },
      {
        title: "call_type_id",
        dataIndex: "call_type_id",
        key: "address",
      },
      {
        title: "created_at",
        dataIndex: "created_at",
        key: "address",
      },
  ];

  return (
    <div>
     <Table className="table" columns={columns} dataSource={users} />
    </div>
  );
};

export default CommonTable;
