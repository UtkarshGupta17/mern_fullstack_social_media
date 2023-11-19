

import React, { useState } from "react";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createComment } from "../../../../DevMingle/client/src/api/posts";
import { isLoggedIn } from "../../../../DevMingle/client/src/helpers/authHelper";
import ErrorAlert from "./ErrorAlert";
import HorizontalStack from "../../../../DevMingle/client/src/components/util/HorizontalStack";
import { useTheme } from "@mui/system"; // Add this import

const CommentEditor = ({ label, comment, addComment, setReplying }) => {
  const theme = useTheme(); // Use the useTheme hook
  const [formData, setFormData] = useState({
    content: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      ...formData,
      parentId: comment && comment._id,
    };

    setLoading(true);
    const data = await createComment(body, params, isLoggedIn());
    setLoading(false);

    if (data.error) {
      setError(data.error);
    } else {
      formData.content = "";
      setReplying && setReplying(false);
      addComment(data);
    }
  };

  const handleFocus = (e) => {
    !isLoggedIn() && navigate("/login");
  };

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper, // Use theme background color
        borderRadius: theme.shape.borderRadius, // Use theme border radius
        boxShadow: theme.shadows[2], // Use theme box shadow
      }}
    >
      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          <Typography variant="h5" color={theme.palette.text.primary}> {/* Use theme text color */}
            {comment ? <>Reply</> : <>Comment</>}
          </Typography>
          <Typography color={theme.palette.text.primary}> {/* Use theme text color */}
            <a href="https://commonmark.org/help/" target="_blank">
              Markdown Help
            </a>
          </Typography>
        </HorizontalStack>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: theme.palette.background.default, // Use theme background color
          }}
        >
          <TextField
            multiline
            fullWidth
            label={label}
            rows={5}
            required
            name="content"
            sx={{
              backgroundColor: theme.palette.background.paper, // Use theme background color
            }}
            onChange={handleChange}
            onFocus={handleFocus}
            value={formData.content}
          />

          <ErrorAlert error={error} sx={{ my: 4 }} />

          <Button
            variant="outlined"
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              backgroundColor: theme.palette.background.paper, // Use theme background color
              mt: 2,
            }}
          >
            {loading ? (
              <div style={{ color: theme.palette.text.primary }}>Submitting</div>
            ) : (
              <div style={{ color: theme.palette.text.primary }}>Submit</div>
            )}
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default CommentEditor;
