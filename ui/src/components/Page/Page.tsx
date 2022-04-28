import { Container, Grid } from "@mui/material";
import { Card } from "../Card";
import { Characters } from "../../data/characters";
import { StarWarService } from "../../services";

export const Page = () => {
  // const handleClick = async () => {
  //   const test = await StarWarService.getPerson(1);
  //   console.log({ test });
  // };
  // return <button onClick={handleClick}>Hello</button>;

  return (
    <Container sx={{ paddingTop: 2, paddingBottom: 2 }}>
      <Grid container spacing={2}>
        {Characters.map((character) => (
          <Grid item xs={4} key={character.pk}>
            <Card character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
