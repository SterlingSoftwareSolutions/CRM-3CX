import React, { useEffect, useState } from "react";
import Table from "../table/table";
import "./Inquiry.css";

const AllInquiries = () => {
  //popup the page in this section
  const [data, setData] = useState([
    {
      id: 1,
      brand: "",
      brand_availability: "",
      product_category: "",

      action: "",
      status_remark: "",
      open: "",

      user_id: "",
      customer_id: "",
      call_type_id: "",
      created_at: "",
    },
  ]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "age",
    },
    {
      title: "Brand Availability",
      dataIndex: "brand_availability",
      key: "address",
    },
    {
      title: "Product Category",
      dataIndex: "product_category",
      key: "address",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "address",
    },
    {
      title: "Status Remark",
      dataIndex: "status_remark",
      key: "address",
    },
    {
      title: "Open",
      dataIndex: "open",
      key: "address",
    },
    {
      title: "User ID",
      dataIndex: "user_id",
      key: "address",
    },
    {
      title: "Customer ID",
      dataIndex: "customer_id",
      key: "address",
    },
    {
      title: "Call Type ID",
      dataIndex: "call_type_id",
      key: "address",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "address",
    },
  ];
  //Get api url
  const api = "http://127.0.0.1:8000/api/inquiries";

  //calling Api get method
  const fetchArray = async () => {
    try {
      let res = await fetch(api);
      res = await res.json();
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  useEffect(() => {
    fetchArray();
  }, []);

  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  console.log(data);
  return (
    <div className="table-container">
      <Table users={data} columns={columns} />
    </div>
  );
};

export default AllInquiries;
