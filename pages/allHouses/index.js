import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CharactersName } from "../../components/allCharacters/charactersName";
import style from "./backgroundImage.module.css";

const AllHouses = () => {
  const [allHouses, setAllHouses] = useState([]);
  const handleGetAllHouses = () => {
    axios
      .get("https://anapioficeandfire.com/api/houses?page=1&pageSize=500")
      .then((res) => {
        setAllHouses(res.data);
      });
  };

  useEffect(() => {
    handleGetAllHouses();
  }, []);
  return (
    <Box component="div" sx={{ width: "fit-content", margin: "auto" }}>
      <Box component="div" className={style.boxBackground} />
      <h1 style={{ width: "fit-content", margin: "auto" }} className={style.h1}>
        All Houses
      </h1>
{console.log("test}
      <CharactersName type="houses" allCharacters={allHouses} />
    </Box>
  );
};

export default AllHouses;
