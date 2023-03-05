import { gql, useQuery } from "@apollo/client";
import { Box, Grid, Paper, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CharacterList from "../components/character/CharacterList";
import MainLayout from "../components/layout/MainLayout";
import Search from "../components/search/Search";
import CHARACTER_SERVICE from "../core/services/characters";
import { Character } from "../core/types/character.type";
import { updateCharacter } from "../features/character/characterSlice";
import { useAppDispatch } from "../hooks";

const query = (search = "") => {
  let filter = "{}";
  if (search !== "") {
    filter = `{ name: "${search}" }`;
  }

  return gql`
    query characters {
      characters(page: 1, filter: ${filter}) {
        results {
          id
          name
          image
          status
          episode {
            id
          }
          location {
            id
            name
          }
        }
        info {
          count
          pages
          next
          prev
        }
      }
    }
  `;
};

export const Home = () => {
  const [search, setSearch] = useState("");
  console.count("render");

  const { loading, error, data } = useQuery(query(search));

  return (
    <MainLayout>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 15 }}
      >
        <Typography variant="h3">Characters</Typography>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box mt={10}>Algunos filtros</Box>
        </Grid>
        <Grid item xs={9}>
          <Search setSearch={setSearch} />
          <br />
          <br />
          {loading && (
            <Grid container spacing={2} justifyContent="center">
              {Array.from({ length: 12 }, (_, i) => (
                <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                  <Box
                    sx={{
                      maxWidth: 200,
                      position: "relative",
                      cursor: "pointer",
                    }}
                  >
                    <Skeleton variant="rectangular" width={200} height={200} />
                    <Box padding={2}>
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="100%" />
                      <Skeleton variant="text" width="50%" />
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          )}
          {error && <h1>Error...</h1>}

          {!loading && !error && (
            <CharacterList characters={data?.characters?.results} />
          )}
        </Grid>
      </Grid>
    </MainLayout>
  );
};
