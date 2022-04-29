import React, { useState } from "react";
import {
  CircularProgress,
  Modal as MuiModal,
  Tabs,
  Tab,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Character } from "../../../../types";
import { Box } from "./styles";

interface ModalProps {
  characterData: Character;
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
  const [tab, setTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, value: number) =>
    setTab(value);

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
          <>
            <Tabs value={tab} onChange={handleChange}>
              <Tab label="json" />
              <Tab label="text" />
            </Tabs>

            <div hidden={tab === 1}>
              <pre>{JSON.stringify(characterData, null, 4)}</pre>
            </div>

            <div hidden={tab === 0}>
              <Typography variant="h5" sx={{ paddingTop: 5, paddingBottom: 2 }}>
                Personal information
              </Typography>
              <Typography variant="body1">
                <strong>Name: </strong> {characterData?.name} <br />
                <strong>Height: </strong> {characterData?.height} <br />
                <strong>Mass: </strong> {characterData?.mass} <br />
                <strong>Hair color: </strong> {characterData?.hairColor} <br />
                <strong>Skin color: </strong> {characterData?.skinColor} <br />
                <strong>Gender: </strong> {characterData?.gender} <br />
                <strong>Birth year: </strong> {characterData?.birthYear} <br />
              </Typography>

              <Typography variant="h5" sx={{ paddingTop: 5, paddingBottom: 2 }}>
                Homeworld
              </Typography>
              <Typography variant="body1">
                <strong>Title: </strong> {characterData?.homeworld?.title}{" "}
                <br />
                <strong>Terrain: </strong> {characterData?.homeworld?.terrain}{" "}
                <br />
                <strong>Population: </strong>{" "}
                {parseInt(
                  characterData?.homeworld?.population || ""
                ).toLocaleString()}
                <br />
              </Typography>

              {characterData?.species && characterData.species.length > 0 && (
                <>
                  <Typography variant="h5" sx={{ marginTop: 5 }}>
                    Species
                  </Typography>
                  <Table sx={{ minWidth: "500px" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Average lifespan</TableCell>
                        <TableCell>Classification</TableCell>
                        <TableCell>Language</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {characterData.species.map((item) => (
                        <TableRow key={item.name}>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.averageLifespan}</TableCell>
                          <TableCell>{item.classification}</TableCell>
                          <TableCell>{item.language}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}

              {characterData?.films && characterData.films.length > 0 && (
                <>
                  <Typography variant="h5" sx={{ marginTop: 5 }}>
                    Films
                  </Typography>
                  <Table sx={{ minWidth: "500px" }}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Director</TableCell>
                        <TableCell>Producers</TableCell>
                        <TableCell>Release date</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {characterData.films.map((film) => (
                        <TableRow key={film.title}>
                          <TableCell>{film.title}</TableCell>
                          <TableCell>{film.director}</TableCell>
                          <TableCell>{film.producers}</TableCell>
                          <TableCell>{film.releaseDate}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </>
              )}
            </div>
          </>
        )}
      </Box>
    </MuiModal>
  );
};
