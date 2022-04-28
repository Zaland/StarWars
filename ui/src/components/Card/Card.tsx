import { CardContent, Typography } from "@mui/material";
import { Character } from "../../types";
import { Card as CardContainer } from "./styles";

interface CardProps {
  character: Character;
  onClick: (arg: number) => void;
}

export const Card = ({ character, onClick }: CardProps) => {
  return (
    <CardContainer onClick={() => onClick(character.pk)}>
      <CardContent sx={{ paddingTop: 3 }}>
        <Typography>{character.fields.name}</Typography>
      </CardContent>
    </CardContainer>
  );
};
