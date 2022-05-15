import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CharactersName } from "../../components/allCharacters/charactersName";
import style from "./backgroundImage.module.css";

const AllCharacters = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const handleGetAllCharacter = () => {
    axios
      .get("https://anapioficeandfire.com/api/characters?page=1&pageSize=100")
      .then((res) => {
        setAllCharacters(res.data);
      });
  };

  useEffect(() => {
    handleGetAllCharacter();
  }, []);
  return (
    <Box component="div" sx={{ width: "fit-content", margin: "auto" }}>
      <Box component="div" className={style.boxBackground} />
      <h1 style={{ width: "fit-content", margin: "auto" }} className={style.h1}>
        All Characters
      </h1>
      <CharactersName allCharacters={allCharacters} />
    </Box>
  );
};

export default AllCharacters;
