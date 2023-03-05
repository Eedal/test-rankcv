import { Character } from "../../core/types/character.type";
import CharacterCard from "./CharacterCard";
import { Grid, Typography } from "@mui/material";
import { Pagination as PaginationType } from "../../core/types/pagination.type";
import { Dispatch, SetStateAction } from "react";

type CharacterListProps = {
  characters: Character[];
};

const CharacterList = ({ characters }: CharacterListProps) => {
  if (!characters?.length)
    return <Typography variant="h3">No hay coincidencias</Typography>;

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        {characters.map((character) => (
          <Grid key={character.id} item xs={12} sm={6} md={4} lg={3}>
            <CharacterCard character={character} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CharacterList;
