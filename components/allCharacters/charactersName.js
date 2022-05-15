import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useStyles } from "./style";
import Link from "next/link";

export function CharactersName({ allCharacters, type }) {
  const classes = useStyles();
  return (
    <>
      {allCharacters && Object.keys(allCharacters) && (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {allCharacters.map(
                (btn) =>
                  btn.name && (
                    <Grid item key={btn + "1"}>
                      <a
                        passHref
                        href={
                          type && type === "houses"
                            ? "#"
                            : `/characterDetail/${btn.url.substring(
                                btn.url.lastIndexOf("/") + 1
                              )}`
                        }
                        className={classes.name}
                      >
                        {btn.name}
                      </a>
                    </Grid>
                  )
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
