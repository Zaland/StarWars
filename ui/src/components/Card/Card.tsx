import { Card as CardMui, CardContent, Typography } from "@mui/material";
import { Character } from "../../types";

interface CardProps {
  character: Character;
}

export const Card = ({ character }: CardProps) => (
  <CardMui>
    <CardContent sx={{ paddingTop: 3 }}>
      <Typography>{character.fields.name}</Typography>
    </CardContent>
  </CardMui>
);
