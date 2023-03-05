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
import useLocation from "../core/hooks/useEpisode";
import { GET_LOCATIONS } from "../core/services/queries";
import { Location, LocationResponse } from "../core/types/locations.type";

const LocationComponent = () => {
  const { item: location, listResult: locations, loading, error, data, select, handleSelect } =
    useLocation<LocationResponse, Location>({query: GET_LOCATIONS});

  return (
    <MainLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 15,
        }}
      >
        <Typography variant="h3">Location: {location?.name}</Typography>
      </div>
      
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box mt={10} mb={2}>Select an locations</Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Locations</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Location"
              onChange={(e) => {
                handleSelect(e.target.value);
              }}
            >
              {locations.map((location: Location) => (
                <MenuItem key={location.id} value={location.id}>
                  {location.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={9}>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error...</h1>}
          {!loading && !error && location?.residents.length && (
            <CharacterList characters={location?.residents} />
          )}
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default LocationComponent;
