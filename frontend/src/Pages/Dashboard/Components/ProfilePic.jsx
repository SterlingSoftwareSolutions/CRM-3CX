import React, { useState } from "react";
import { Avatar, Button } from "antd";

const ProfilePic = (props) => {
  const { agentName } = props;

  const getInitials = (name) => {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
      initials =
        nameSplit[0].substring(0, 1) +
        nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
      initials = nameSplit[0].substring(0, 1);
    } else return;

    return initials.toUpperCase();
  };

  return (
    <Avatar
      style={{
        backgroundColor: "#1bc5dc",
        verticalAlign: "middle",
      }}
      size="large"
    >
      {getInitials(agentName)}
    </Avatar>
  );
};

export default ProfilePic;
