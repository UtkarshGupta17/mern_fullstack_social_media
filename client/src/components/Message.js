// import { Avatar, Card, useTheme } from "@mui/material";
// import React from "react";
// import UserAvatar from "./UserAvatar";
// import HorizontalStack from "./util/HorizontalStack";

// const Message = (props) => {
//   const username = props.conservant.username;
//   const message = props.message;
//   const theme = useTheme();

//   let styles = {};
//   if (message.direction === "to") {
//     styles = {
//       justifyContent: "flex-start",
//     };
//   } else if (message.direction === "from") {
//     styles = {
//       messageColor: theme.palette.grey["100"],
//       justifyContent: "flex-end",
//     };
//   }

//   return (
//     <HorizontalStack
//       sx={{ paddingY: 1, width: "100%" }}
//       spacing={2}
//       justifyContent={styles.justifyContent}
//       alignItems="flex-end"
//     >
//       {message.direction === "to" && (
//         <UserAvatar username={username} height={30} width={30} />
//       )}

//       <Card
//         sx={{
//           borderRadius: "25px",
//           backgroundColor: styles.messageColor,
//           borderWidth: "1px",
//           paddingY: "12px",
//           maxWidth: "70%",
//           paddingX: 2,
//         }}
//       >
//         {message.content}
//       </Card>
//     </HorizontalStack>
//   );
// };

// export default Message;

import React from "react";
import { Card, useTheme } from "@mui/material";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";

const Message = (props) => {
  const username = props.conservant.username;
  const message = props.message;
  const theme = useTheme();

  let styles = {};
  if (message.direction === "to") {
    styles = {
      justifyContent: "flex-start",
    };
  } else if (message.direction === "from") {
    styles = {
      messageColor: theme.palette.text.secondary, // Use secondary text color for messages from the user
      justifyContent: "flex-end",
    };
  }

  return (
    <HorizontalStack
      sx={{ paddingY: 1, width: "100%" }}
      spacing={2}
      justifyContent={styles.justifyContent}
      alignItems="flex-end"
    >
      {message.direction === "to" && (
        <UserAvatar username={username} height={30} width={30} />
      )}

      <Card
        sx={{
          borderRadius: "25px",
          borderWidth: "1px",
          paddingY: "12px",
          paddingX: 2,
          backgroundColor: "#FF7597",
          maxWidth: "70%",
          boxShadow: theme.components.MuiCard.styleOverrides.root.boxShadow,
        }}
      >
        {message.content}
      </Card>
    </HorizontalStack>
  );
};

export default Message;
