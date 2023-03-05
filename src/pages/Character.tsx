import { Box, Grid, Skeleton, Typography } from "@mui/material";
import MainLayout from "../components/layout/MainLayout";
import { Character } from "../core/types/character.type";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../core/services/queries";
import { useMemo } from "react";
import CharacterDetail from "../components/character/CharacterDetail";

const CharacterComponent = () => {
  const { characterId } = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { characterId },
  });

  const character = useMemo(() => data?.character, [data]);

  return (
    <MainLayout>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 15 }}
      >
        <Typography variant="h3">Character: {character?.name}</Typography>
      </div>
      <Box display="flex" justifyContent="center">
        {loading && (
          <Grid container spacing={2} justifyContent="center">
            {Array.from({ length: 12 }, (_, i) => (
              <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                <Skeleton variant="rectangular" width={250} height={360} />
              </Grid>
            ))}
          </Grid>
        )}
        {error && <Typography variant="h3">Error...</Typography>}
        {!loading && !error && <CharacterDetail character={character} />}
      </Box>
    </MainLayout>
  );
};

export default CharacterComponent;
