import { Card, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box pb={3}>
      <Card>
        <Typography variant="subtitle1">
          Don't forget to share with your friends! ⭐
        </Typography>
      </Card>
    </Box>
  );
};

export default Footer;
