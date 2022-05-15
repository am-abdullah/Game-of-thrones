import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";

const OneCharacter = ({ character }) => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    if (character && Object.keys(character).length > 0) {
      setData([
        {
          title: "Gender",
          value: character.gender,
        },
        {
          title: "Culture",
          value: character.culture,
        },
        {
          title: "Born",
          value: character.born,
        },
        {
          title: "Died",
          value: character.died,
        },
        {
          title: "Titles",
          value: character.Titles,
        },
        {
          title: "Aliases",
          value: character.Aliases,
        },
        {
          title: "Father",
          value: character.father,
        },
        {
          title: "Mother",
          value: character.mother,
        },
        {
          title: "Spouse",
          value: character.spouse,
        },
        {
          title: "Books",
          value: character.books,
        },
        {
          title: "Seasons of the TV series this character has been in",
          value: character.tvSeries,
        },
        {
          title: "PlayedBy",
          value: character.playedBy,
        },
      ]);
    }
  }, [character]);

  const handleUnKnownCase = (name) => {
    if (name === "Gender") {
      return "The Gender that this character belongs to is unkown";
    }
    if (name === "Culture") {
      return "The culture that this character belongs to is unkown";
    }
    if (name === "Born") {
      return "The birth details of this character is unkown";
    }
    if (name === "Died") {
      return "The details of this character's deaths are unkown";
    }
    if (name === "Titles") {
      return "The details of this character's Titles are unkown";
    }
    if (name === "Father") {
      return "This characters father is unkown";
    }
    if (name === "Mother") {
      return "The mother of this character is unkown";
    }
    if (name === "Spouse") {
      return "This character has no spouses";
    }
    if (name === "Aliases") {
      return "The Aliases that his character belongs to is unkown";
    }
    if (name === "PlayedBy") {
      return "This character has not appeared in the TV series";
    }
    if (name === "Seasons of the TV series this character has been in") {
      return "This character has not appeared in the TV series";
    }

    if (name === "Books") {
      return "This character has not appeared in the Books";
    }
  };

  return (
    <>
      {
        <h1 style={{ width: "fit-content", margin: "auto" }}>
          {character.name}
        </h1>
      }
      <br />

      {data &&
        data.map((dt, index) => (
          <>
            <Box
              component="div"
              sx={{ float: index % 2 !== 0 && "right", padding: "50px" }}
            >
              <h1 style={{ margin: "0px" }}>{dt.title}:</h1>
              {Array.isArray(dt.value) ? (
                dt.value && Object.keys(dt.value).length > 0 ? (
                  dt.value.map((v) => (
                    <p style={{ margin: "0px 0px 0px 4px" }}>{v}</p>
                  ))
                ) : (
                  handleUnKnownCase(dt.title)
                )
              ) : (
                <p style={{ margin: "0px 0px 0px 4px" }}>
                  {dt.value
                    ? [dt.value].join(" ")
                    : handleUnKnownCase(dt.title)}
                </p>
              )}
            </Box>
            <br />
          </>
        ))}
    </>
  );
};

export default OneCharacter;
