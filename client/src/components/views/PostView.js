import React, { useEffect, useState } from "react";
import { Container, Stack, ThemeProvider } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts";
import Comments from "../Comments";
import ErrorAlert from "../ErrorAlert";
import { isLoggedIn } from "../../helpers/authHelper";
import darkTheme from "../../theme.js"; // Adjust the path accordingly
import PostCard from "../PostCard";
import Loading from "../Loading";
import GoBack from "../GoBack";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const user = isLoggedIn();

  const fetchPost = async () => {
    setLoading(true);
    const data = await getPost(params.id, user && user.token);
    if (data.error) {
      setError(data.error);
    } else {
      setPost(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Navbar />
        <GoBack />
        <Stack spacing={2}>
          {loading ? (
            <Loading />
          ) : post ? (
            <PostCard post={post} key={post._id} />
          ) : (
            error && <ErrorAlert error={error} />
          )}
          <Comments />
        </Stack>
        <Sidebar />
      </Container>
    </ThemeProvider>
  );
};

export default PostView;
