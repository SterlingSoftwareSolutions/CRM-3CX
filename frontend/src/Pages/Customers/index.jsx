import React, { useEffect, useState } from "react";
import Table from "../../Components/table/table";
import moment from "moment";

const CustomerTable = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([
    {
      id: 1,
      email: "",
      name: "",
      created_at: "",
    },
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "address",
    },
    {
      title: "Remarks",
      dataIndex: "comment",
      key: "address",
    },
  ];
  //Get api url
  const api = "/api/customers";

  //calling Api get method
  const fetchArray = async () => {
    try {
      let res = await fetch(api,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
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
  return (
    <div className="table-container">
      <h2 className="inquiries-title">Customers</h2>
      <Table users={data} columns={columns} />
    </div>
  );
};
export default CustomerTable;
