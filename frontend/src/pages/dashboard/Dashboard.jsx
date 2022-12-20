import { Card, Col, Row } from 'antd';
import React from 'react'
import { PieChart, Pie, Tooltip, Cell, Legend, } from 'recharts';

const projectdata = [
  {name: "Abans", value:207},
  {name: "Koko", value:302},
  {name: "Big Deals", value:159},
]

const agentdata = [
  {name: "John", value:54},
  {name: "David", value:67},
  {name: "Katy", value:61},
  {name: "Jane", value:51},
  {name: "Kevin", value:71},
]

const inbounddata = [
  {name: "Abans", value:89},
  {name: "Koko", value:98},
  {name: "Big Deals", value:75},
]

const outbounddata = [
  {name: "Abans", value:76},
  {name: "Koko", value:94},
  {name: "Big Deals", value:81},
]

const resolveddata = [
  {name: "Abans", value:31},
  {name: "Koko", value:54},
  {name: "Big Deals", value:41},
]

const unresolveddata = [
  {name: "Abans", value:12},
  {name: "Koko", value:7},
  {name: "Big Deals", value:6},
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#fc4242'];

const Dashboard = () => {


  return (
    <div className="site-card-wrapper">
    <Row>
      <Col span={12}>
        <div className="card">
          <h2 className='title'>Project Vice calls</h2>
          <h4>Total calls: </h4>
          <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={projectdata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label= "value"
          >
            {projectdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </div>
      </Col>
      <Col span={12}>
      <div className="card">
      <h2 className='title'>Agent Vice calls</h2>
      <h4>Total calls: </h4>
      <PieChart width={400} height={400}>
      <Pie
            dataKey="value"
            isAnimationActive={false}
            data={agentdata}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label= "value"
          >
            {agentdata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </div>
      </Col>

      <Col span={12}>
      <div className="card">
      <h2 className='title'>Inbound calls</h2>
      <h4>Total calls: </h4>
      <PieChart width={400} height={400}>
      <Pie
            dataKey="value"
            isAnimationActive={false}
            data={inbounddata}
            label= "name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {inbounddata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </div>
      </Col>

      <Col span={12}>
      <div className="card">
      <h2 className='title'>Outbound calls</h2>
      <h4>Total calls: </h4>
      <PieChart width={400} height={400}>
      <Pie
            dataKey="value"
            isAnimationActive={false}
            data={outbounddata}
            label= "name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {outbounddata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </div>
      </Col>

      <Col span={12}>
        <div className="card">
        <h2 className='title'>Resolved Cases</h2>
          <h4>Total cases: </h4>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={resolveddata}
            label= "name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {resolveddata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </div>
      </Col>

      <Col span={12}>
          <div className="card">
          <h2 className='title'>Unresolved Cases</h2>
          <h4>Total cases: </h4>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={unresolveddata}
            label= "name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {unresolveddata.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend/>
        </PieChart>
        </div>
      </Col>


      
    </Row> 
  </div>
  )
}

export default Dashboard