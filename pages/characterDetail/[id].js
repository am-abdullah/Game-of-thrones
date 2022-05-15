import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SingleCharacter from "../../components/singleCharacter";
import OneCharacter from "../../components/singleCharacter/oneCharacter";

const CharacterDetails = () => {
  const [character, setCharacter] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const handleGetDetails = () => {
    axios
      .get(`https://anapioficeandfire.com/api/characters/${id}`)
      .then((res) => {
        setCharacter(res.data);
      });
  };
  useEffect(() => {
    if (id) {
      handleGetDetails();
    }
  }, [id]);
  return (
    <>
      <OneCharacter character={character} />
    </>
  );
};

export default CharacterDetails;
