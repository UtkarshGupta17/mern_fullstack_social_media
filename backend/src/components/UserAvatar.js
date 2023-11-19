import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width }) => {
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "#FF7597",//owl pink
      }}
      src={"https://robohash.org/" + username}
    />
  );
};

export default UserAvatar;
