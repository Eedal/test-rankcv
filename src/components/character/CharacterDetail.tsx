import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Character } from "../../core/types/character.type";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import useFavorites from "../../core/hooks/useFavorites";
import EpisodeCard from "../../components/episode/EpisodeCard";

type CharacterDetailProps = {
  character: Character;
};

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  const { favorites, handleFavorites } = useFavorites();

  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ position: "relative" }}>
          <IconButton
            onClick={() => handleFavorites(character.id)}
            sx={{ maxWidth: 250, position: "absolute", top: 5, right: 60 }}
          >
            {favorites.includes(character.id) ? (
              <StarOutlinedIcon
                style={{ fontSize: "3rem", color: "#f6c900" }}
              />
            ) : (
              <StarBorderOutlinedIcon style={{ fontSize: "3rem" }} />
            )}
          </IconButton>
          <img src={character.image} alt={character.name} loading="lazy" />
          <Typography
            gutterBottom
            variant="h6"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",

              textOverflow: "ellipsis",
            }}
            title={character.name}
          >
            {character.name}
          </Typography>
          <Box display="flex">
            <Typography component="span" fontWeight="fontWeightBold">
              Episodes:
            </Typography>
            <Typography component="span" ml={1}>
              {character?.episode?.length}
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap">
            <Typography component="span" fontWeight="fontWeightBold">
              Location:
            </Typography>
            <Typography
              component="span"
              ml={1}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {character.location.name}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography component="span" fontWeight="fontWeightBold">
              Status:
            </Typography>
            <Typography component="span" ml={1}>
              {character.status}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={8} lg={8} sx={{ position: "relative" }}>
          <Grid container spacing={2} justifyContent="center" sx={{
            height: 500,
            overflow: 'auto'
          }}>
            {character?.episode?.map((ep) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ position: "relative" }}
              >
                <EpisodeCard key={ep.id} episode={ep} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CharacterDetail;
