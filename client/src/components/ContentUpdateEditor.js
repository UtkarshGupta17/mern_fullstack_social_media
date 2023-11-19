import React, { useState } from "react";
import { Box, Button, Stack, TextField, useTheme } from "@mui/material";

const ContentUpdateEditor = (props) => {
  const [content, setContent] = useState(props.originalContent);
  const [error, setError] = useState("");
  const theme = useTheme();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = e.target.content.value;
    let error = null;

    if (props.validate) {
      error = props.validate(content);
    }

    if (error && error.length !== 0) {
      setError(error);
    } else {
      props.handleSubmit(e);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.components.MuiCard.styleOverrides.root.boxShadow,
      }}
    >
      <Stack>
        <TextField
          value={content}
          fullWidth
          margin="normal"
          name="content"
          sx={{ backgroundColor: theme.palette.background.paper }}
          onChange={handleChange}
          error={error.length !== 0}
          helperText={error}
          multiline
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            backgroundColor: theme.palette.background.paper,
            mt: theme.spacing(1),
          }}
        >
          Update
        </Button>
      </Stack>
    </Box>
  );
};

export default ContentUpdateEditor;