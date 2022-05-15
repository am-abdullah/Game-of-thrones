import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Houses from "../../components/houses";
import style from "./home.module.css";

const HomePage = () => {
  const [houses, setHouses] = useState([]);

  const handleGetAllHouses = () => {
    axios.get("https://anapioficeandfire.com/api/houses").then((res) => {
      setHouses(res.data);
    });
  };
  useEffect(() => {
    handleGetAllHouses();
  }, []);
  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.secondDiv}>
          <div className={style.titleDiv}></div>
          <p className={style.heading}>personal non commercial project</p>
        </div>
      </div>
      {/* <Box className={style.boxBackground} component="div">
        <Typography>All characters</Typography>
      </Box> */}
      <Houses houses={houses} />
    </>
  );
};

export default HomePage;
