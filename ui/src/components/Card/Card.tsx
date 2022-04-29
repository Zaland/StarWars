import { CardContent, Typography } from "@mui/material";
import { CharacterData } from "../../../../types";
import { Card as CardContainer } from "./styles";

interface CardProps {
  character: CharacterData;
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
