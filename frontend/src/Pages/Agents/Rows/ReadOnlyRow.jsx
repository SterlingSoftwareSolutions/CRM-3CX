import React from "react";

const ReadOnlyRow = ({agent, handleEditClick}) => {
  return (
      <tr>
        <td>{agent.name}</td>
        <td>{agent.total}</td>
        <td>{agent.resolved}</td>
        <td>{agent.unresolved}</td>
        <td>
          <button type="button" onClick={(event)=> handleEditClick(event, agent)}>Edit</button>
        </td>
      </tr>
  );
};

export default ReadOnlyRow;
