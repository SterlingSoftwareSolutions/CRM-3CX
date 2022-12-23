import React from "react";

const ReadOnlyRow = ({agent, handleEditClick, handleDeleleteClick}) => {
  return (
      <tr>
        <td>{agent.name}</td>
        <td>{agent.total}</td>
        <td>{agent.resolved}</td>
        <td>{agent.unresolved}</td>
        <td>
          <button type="button" onClick={(event)=> handleEditClick(event, agent)}>Edit</button>
          <button type="button" onClick={()=> handleDeleleteClick(agent.id)}>Delete</button>
        </td>
      </tr>
  );
};

export default ReadOnlyRow;
