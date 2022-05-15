import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";

const Houses = ({ houses }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      {
        <h1 style={{ width: "fit-content", margin: "auto" }}>
          The Great Houses of Westeros
        </h1>
      }
      <br />

      {houses && Object.keys(houses) && (
        <Grid
          sx={{ flexGrow: 1, width: "fit-content", margin: "auto" }}
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {houses.map(
                (btn, index) =>
                  btn.name &&
                  index < 9 && (
                    <Grid
                      sx={{ paddingBottom: "30px", width: "30%" }}
                      item
                      key={btn + "1"}
                    >
                      <a passHref href={"#"} className={classes.name}>
                        {btn.name}
                      </a>
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
        </Grid>
      )}

      <Button variant="outlined" onClick={() => router.push("/allHouses")}>
        All Houses
      </Button>
    </>
  );
};

export default Houses;
