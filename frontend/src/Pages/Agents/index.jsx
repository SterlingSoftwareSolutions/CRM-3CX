import React, { useState, Fragment } from 'react'
import { nanoid} from 'nanoid';
import './index.css';
import data from "../../mock-data.json";
import ReadOnlyRow from '../../Components/Rows/ReadOnlyRow';
import EditableRow from '../../Components/Rows/EditableRow';

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

  const [editAgentId, seteditagentId] = useState(null);

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
      total: addFormData.total,
      resolved: addFormData.resolved,
      unresolved: addFormData.unresolved
    };
    const newAgents = [...agents,newAgent];
    setAgents(newAgents);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    seteditagentId(contact.id)

    const formValues = {
      name:contact.name,
      total:contact.total,
      resolved:contact.resolved,
      unresolved:contact.unresolved,
    }
    setEditFormData(formValues)
  };
  
  return (
    <div className='agents'>
      <form>
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
              handleEditFormChange = {handleAddFormChange}
              />
              ) : (
              <ReadOnlyRow 
              agent={agent}
              handleEditClick={handleEditClick}
              /> )}   
            </Fragment>    
          )}
        </tbody>
      </table>
      </form>
      <h2>Add a Contact</h2>
      <form onSubmit={handleAddformSubmit}>
        <input type="text"
        name='name'
        required= 'required'
        placeholder='Enter a name...'
        onChange={handleAddFormChange}
        />
        <input type="text"
        name='total'
        required= 'required'
        placeholder='Enter total calls...'
        onChange={handleAddFormChange}
        />
        <input type="text"
        name='resolved'
        required= 'required'
        placeholder='Enter Resolved cases...'
        onChange={handleAddFormChange}
        />
        <input type="text"
        name='unresolved'
        required= 'required'
        placeholder='Enter Unresolved cases...'
        onChange={handleAddFormChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Agents