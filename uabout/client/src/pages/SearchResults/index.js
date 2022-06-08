import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { userSearchResult } from "../../reducers/mainSlice.js";
import { Box } from "@mui/system";
import "./index.css";
import { default as FriendBox } from "../../components/FriendBox";
import {
  FormControl,
  Button,
  Typography,
  TextField,
  Container,
} from "@mui/material";
import BackgroundLetterAvatars from "../../components/AvatarIcon";

const SearchResultsPage = () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  const searchResult = useSelector(userSearchResult);
  const results = searchResult.data.results;

  function sendFriendRequest() {}

  return (
    <>
      <Container class="Container" maxWidth="md">
        <Box sx={{ pt: "2%", pb: "5%", mb: "5%" }}>
          <h1>Search Results for {username}</h1>
        </Box>

        {searchResult.status === 204 && (
          <Box sx={{ pt: "2%", pb: "5%", mt: "2%", mb: "5%" }}>
            <h2>Could not find any results for {username}</h2>
          </Box>
        )}

        {searchResult.status === 200 &&
          results.map(({ username, first_name, last_name }, idx) => (
            <FriendBox />
          ))}
      </Container>
    </>
  );
};

export default SearchResultsPage;
