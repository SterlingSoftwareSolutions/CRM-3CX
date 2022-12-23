import React, { useState, Fragment } from 'react'
import { nanoid} from 'nanoid';
import './index.css';
import data from "./mock-data.json";
import ReadOnlyRow from './Rows/ReadOnlyRow';
import EditableRow from './Rows/EditableRow';

const Agents = () => {
  const [agents, setAgents] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name:'',
    total:'',
    resolved:'',
    unresolved:''
  });

  const [editFormData, setEditFormData] = useState({
    name:'',
    total:'',
    resolved:'',
    unresolved:''
  });

  const [editAgentId, seteditAgentId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddformSubmit = (event) => {
    event.preventDefault();

    const newAgent = {
      id: nanoid(),
      name: addFormData.name,
      total: 0,
      resolved: 0,
      unresolved: 0
    };
    const newAgents = [...agents,newAgent];
    setAgents(newAgents);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedAgent={
      id: editAgentId,
      name: editFormData.name,
      total: editFormData.total,
      resolved: editFormData.resolved,
      unresolved: editFormData.unresolved
    }

    const newAgents = [...agents];

    const index = agents.findIndex((agent)=> agent.id === editAgentId);

    newAgents[index] = editedAgent;

    setAgents(newAgents)
    seteditAgentId(null)
  }

  const handleEditClick = (event, agent) => {
    event.preventDefault();
    seteditAgentId(agent.id)

    const formValues = {
      name:agent.name,
      total:agent.total,
      resolved:agent.resolved,
      unresolved:agent.unresolved,
    }
    setEditFormData(formValues)
  };

  const handleCancelClick = () => {
    seteditAgentId(null);
  }

  const handleDeleleteClick = (agentId) =>{
    const newAgents = [...agents];

    const index = agents.findIndex((agent)=> agent.id === agentId);

    newAgents.splice(index, 1);

    setAgents(newAgents);
  }
  
  return (
    <div className='agents'>
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Calls</th>
            <th>Resolved Cases</th>
            <th>Unresolved Cases</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent)=>
            <Fragment>
              { editAgentId === agent.id ? (
              <EditableRow 
              editFormData= {editFormData}
              agent={agent} 
              handleEditFormChange = {handleEditFormChange}
              handleCancelClick = {handleCancelClick}
              />
              ) : (
              <ReadOnlyRow 
              agent={agent}
              handleEditClick={handleEditClick}
              handleDeleleteClick={handleDeleleteClick}
              /> )}   
            </Fragment>    
          )}
        </tbody>
      </table>
      </form>
      <h2>Add an Agent</h2>
      <form onSubmit={handleAddformSubmit}>
        <input type="text"
        name='name'
        required= 'required'
        placeholder='Enter a name...'
        onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Agents