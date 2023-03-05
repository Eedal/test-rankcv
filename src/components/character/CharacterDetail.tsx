import { Box, Button, IconButton, Typography } from "@mui/material";
import { Character } from "../../core/types/character.type";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import useFavorites from "../../core/hooks/useFavorites";
import { useNavigate } from "react-router-dom";

type CharacterDetailProps = {
  character: Character;
};

const CharacterDetail = ({ character }: CharacterDetailProps) => {
  const { favorites, handleFavorites } = useFavorites();
  let navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate('/home')} >Atrás</Button>
      <div
        style={{
          position: "relative",
        }}
      >

        <IconButton
          onClick={() => handleFavorites(character.id)}
          sx={{ maxWidth: 250, position: "absolute", top: 5, right: 15 }}
        >
          {favorites.includes(character.id) && <StarOutlinedIcon />}
          {!favorites.includes(character.id) && <StarBorderOutlinedIcon />}
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
          <Typography component="span" ml={1} style={{ whiteSpace: "pre-wrap" }}>
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
      </div>


    </div>
  );
};

export default CharacterDetail;
