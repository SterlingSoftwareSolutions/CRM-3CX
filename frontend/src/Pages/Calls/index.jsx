import React from 'react'
import { useState } from 'react'
import { data } from './data'

const Calls = () => {
  const [search, setSearch] = useState('');
  console.log(search)
  return (
    <div>
      <input type="search" 
      onChange={(e) => setSearch(e.target.value)}
      placeholder= 'Search'
       />
      <table>
        <thead>
          <tr>
            <th>Customer Phone Number</th>
            <th>Customer Name</th>
            <th>Agent Name</th>
            <th>Call Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Call Duration</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((item)=>{
            return search.toLowerCase() === ''
            ? item:
            item.customer_name.toLowerCase().includes(search)|| 
            item.agent_name.toLowerCase().includes(search)|| 
            item.location.toLowerCase().includes(search)
          }).map((item)=>(
            <tr>
              <td>{item.phone}</td>
              <td>{item.customer_name}</td>
              <td>{item.agent_name}</td>
              <td>{item.call_type}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.duration}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calls