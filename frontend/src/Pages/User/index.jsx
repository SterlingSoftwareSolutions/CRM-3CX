import React, { useEffect, useState } from "react";
import Table from "../../Components/table/table";
import moment from "moment";

const Users = () => {
  const [data, setData] = useState([
    {
      id: 1,
      email: "",
      name: "",
      created_at: "",
    },
  ]);

  const getDate = (dateString) => {
    return moment(dateString).format("DD-MM-YYYY");
  };
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
      title: "User Created Date",
      dataIndex: "created_at",
      render: (key, record) => {
        return <span>{getDate(record)}</span>;
      },
    },
  ];
  //Get api url
  const api = "/api/users";
  const token = sessionStorage.getItem("token");
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
      setData(res.data);
    } catch (error) {
      alert("Only Admins View");
    }
  };
  useEffect(() => {
    fetchArray();
  }, []);

  return (
    <div className="table-container">
      <h2 className="inquiries-title">Users</h2>
      <Table users={data} columns={columns} />
    </div>
  );
};

export default Users;
