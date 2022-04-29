import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Modal } from "../Modal";
import { Card } from "../Card";
import { Search } from "../Search";
import { StarWarService } from "../../services";
import { Characters } from "../../data/characters";
import { Container } from "./styles";
import { Character } from "../../../../types";

export const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characterData, setCharacterData] = useState<Character | {}>({});
  const [modal, setModal] = useState(false);

  const handleClick = async (id: number) => {
    try {
      setModal(true);
      setIsLoading(true);

      const response = await StarWarService.getCharacter(id);

      setCharacterData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setModal(false);
      setIsLoading(false);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Modal
        characterData={characterData}
        open={modal}
        isLoading={isLoading}
        onClick={() => setModal(false)}
      />

      <Container>
        <Typography sx={{ paddingBottom: 2 }}>
          Select a character to load their data...
        </Typography>

        <Search onClick={handleClick} />

        <Grid container spacing={2}>
          {Characters.map((character) => (
            <Grid item xs={4} key={character.pk}>
              <Card character={character} onClick={handleClick} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
