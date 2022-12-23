import React from 'react'

const EditableRow = ({agent, editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
       <td>
       <input type="text"
        name='name'
        required= 'required'
        placeholder='Enter a name...'
        value={editFormData.name}
        onChange={handleEditFormChange}
        />
       </td>
       <td>{agent.total}</td>
        <td>{agent.resolved}</td>
        <td>{agent.unresolved}</td>
       <td>
        <button type='submit'>Save</button>
        <button type='button' onClick={handleCancelClick}>Cencel</button>
       </td>
    </tr>
  )
}

export default EditableRow