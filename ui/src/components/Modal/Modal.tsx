import { CircularProgress, Modal as MuiModal } from "@mui/material";
import { Character } from "../../../../types";
import { Box } from "./styles";

interface ModalProps {
  characterData: Character | {};
  open: boolean;
  isLoading: boolean;
  onClick: () => void;
}

export const Modal = ({
  characterData,
  open,
  isLoading,
  onClick,
}: ModalProps) => {
  console.log({ characterData, open, isLoading, onClick });
  return (
    <MuiModal
      open={open}
      onClose={onClick}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <pre>{JSON.stringify(characterData, null, 4)}</pre>
        )}
      </Box>
    </MuiModal>
  );
};
