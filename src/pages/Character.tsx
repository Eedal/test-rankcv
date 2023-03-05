import { Box, Grid, Skeleton, Typography } from "@mui/material";
import MainLayout from "../components/layout/MainLayout";
import { Character } from "../core/types/character.type";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../core/services/queries";
import { useMemo } from "react";
import CharacterDetail from "../components/character/CharacterDetail";
import SkeletonCard from "../components/shared/SkeletonCard";

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
            {Array.from({ length: 1 }, (_, i) => (
              <SkeletonCard key={i} maxWidth={300} />
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
