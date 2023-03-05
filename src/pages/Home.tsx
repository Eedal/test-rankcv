import { useQuery } from "@apollo/client";
import { Box, Grid, Pagination, Skeleton, Typography } from "@mui/material";
import { useState } from "react";
import CharacterList from "../components/character/CharacterList";
import MainLayout from "../components/layout/MainLayout";
import Search from "../components/search/Search";
import { Subtitle } from "../components/shared/styledComponents";
import useDebounce from "../core/hooks/useDebonce";
import { GET_CHARACTERS } from "../core/services/queries";

export const Home = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce(search, 500);
  console.count("render");

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page, filter: { name: debouncedSearchTerm } },
  });

  const handleSearch = (value: string) => {
    setPage(1);
    setSearch(value);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <MainLayout>
      <Subtitle>
        <Typography variant="h3">Characters</Typography>
      </Subtitle>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box mt={10}>Algunos filtros</Box>
        </Grid>
        <Grid item xs={9}>
          <Search setSearch={handleSearch} />

          {loading && (
            <Grid container spacing={2} justifyContent="center" paddingTop={4}>
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
            <Box
              justifyContent="center"
              sx={{
                paddingTop: 4,
              }}
            >
              <CharacterList characters={data?.characters?.results} />
              {data?.characters?.info.pages && (
                <Pagination
                  onChange={handleChangePage}
                  count={data?.characters?.info.pages}
                  page={page}
                  showFirstButton
                  showLastButton
                  sx={{ marginY: 4 }}
                />
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </MainLayout>
  );
};
