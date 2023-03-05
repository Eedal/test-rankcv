import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CharacterList from "../components/character/CharacterList";
import MainLayout from "../components/layout/MainLayout";
import useEpisode from "../core/hooks/useGenericData";
import { Episode } from "../core/types/episode.type";
import { EpisodeResponse } from "../core/types/episode.type";
import { GET_EPISODES } from "../core/services/queries";
import { Subtitle } from "../components/shared/styledComponents";
import SkeletonCard from "../components/shared/SkeletonCard";

const Episodes = () => {
  try {
    const {
      item: episode,
      listResult: episodes,
      loading,
      error,
      select,
      handleSelect,
    } = useEpisode<EpisodeResponse, Episode>({ query: GET_EPISODES });

    return (
      <MainLayout>
        <Subtitle>
          <Typography variant="h3">Episode: {episode?.name}</Typography>
        </Subtitle>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 15,
          }}
        >
          <Typography variant="subtitle1">
            Air date: {episode?.air_date}
          </Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Box mt={10} mb={2}>
              Select an episode
            </Box>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Episodes</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="Episode"
                onChange={(e) => {
                  handleSelect(e.target.value);
                }}
              >
                {episodes?.map((episode: Episode) => (
                  <MenuItem key={episode.id} value={episode.id}>
                    {episode.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={9}>
            {loading && (
              <Grid
                container
                spacing={2}
                justifyContent="center"
                paddingTop={4}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <SkeletonCard key={i} maxWidth={200} />
                ))}
              </Grid>
            )}
            {error && <h1>Error...</h1>}
            {!loading && !error && episode?.characters.length && (
              <CharacterList characters={episode?.characters} />
            )}
          </Grid>
        </Grid>
      </MainLayout>
    );
  } catch (e) {
    return <h1>Error: {JSON.stringify(e)}</h1>;
  }
};

export default Episodes;
