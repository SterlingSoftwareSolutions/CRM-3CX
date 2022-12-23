import React from 'react'

const EditableRow = ({editFormData, handleEditFormChange}) => {
  return (
    <tr>
       <td>
       <input type="text"
        name='name'
        required= 'required'
        placeholder='Enter a name...'
        defaultvalue={editFormData.name}
        onChange={handleEditFormChange}
        />
       </td>
       <td>
       <input type="text"
        name='total'
        required= 'required'
        placeholder='Enter total calls...'
        value={editFormData.total}
        onChange={handleEditFormChange}
        />
       </td>
       <td>
       <input type="text"
        name='resolved'
        required= 'required'
        placeholder='Enter Resolved cases...'
        value={editFormData.resolved}
        onChange={handleEditFormChange}
        />
       </td> 
       <td>
       <input type="text"
        name='unresolved'
        required= 'required'
        placeholder='Enter Unresolved cases...'
        value={editFormData.unresolved}
        onChange={handleEditFormChange}
        />
       </td>
       <td>
        <button type='submit'>Save</button>
       </td>
    </tr>
  )
}

export default EditableRow