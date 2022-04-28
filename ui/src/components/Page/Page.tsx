import { useState } from "react";
import { Backdrop, Grid, Typography, CircularProgress } from "@mui/material";
import { Card } from "../Card";
import { StarWarService } from "../../services";
import { Characters } from "../../data/characters";
import { Container } from "./styles";

export const Page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characterData, setCharacterData] = useState({});

  const handleClick = async (id: number) => {
    setIsLoading(true);

    const response = await StarWarService.getCharacter(id);

    setCharacterData(response.data);
    setIsLoading(false);
  };

  return (
    <>
      <Backdrop open={isLoading} onClick={() => setIsLoading(false)}>
        <CircularProgress sx={{ color: "white" }} />
      </Backdrop>

      <Container>
        <Typography sx={{ paddingBottom: 2 }}>
          {Object.keys(characterData).length
            ? JSON.stringify(characterData, null, "\t")
            : "Select a character to load their data..."}
        </Typography>
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
