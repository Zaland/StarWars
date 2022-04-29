import { useState } from "react";
import { TextField, Button } from "@mui/material";

interface SearchProps {
  onClick: (arg: number) => void;
}

export const Search = ({ onClick }: SearchProps) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const id = parseInt(text);

    if (isNaN(id)) {
      alert("Not a number. Please enter a number.");
      return;
    }

    onClick(id);
  };

  return (
    <>
      <TextField
        placeholder="Search by id..."
        sx={{ width: "30%", marginBottom: 2 }}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button
        variant="contained"
        disabled={text.length === 0}
        size="large"
        sx={{ height: "56px", borderRadius: 0 }}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </>
  );
};
