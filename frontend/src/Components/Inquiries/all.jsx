import React, { useEffect, useState } from "react";
import Table from "../table/table";

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
    <div>
      <Table users={data} />
    </div>
  );
};

export default AllInquiries;
