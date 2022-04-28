import { Card as MuiCard } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Card = styled(MuiCard)`
  background-color: #eaeaea;
  :hover {
    background-color: #ddd;
    cursor: pointer;
  }
`;
