import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Character } from "../../core/types/character.type";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import useFavorites from "../../core/hooks/useFavorites";
import { useNavigate } from "react-router-dom";

type CharacterProp = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterProp) => {
  const { favorites, handleFavorites } = useFavorites();
  let navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate(`/home/${character.id}`);
      }}
      sx={{ maxWidth: 250, position: "relative", cursor: "pointer" }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          handleFavorites(character.id);
        }}
        sx={{ position: "absolute", top: -10, right: -10 }}
      >
        {favorites.includes(character.id) ? (
          <StarOutlinedIcon style={{ fontSize: "3rem", color: "#f6c900" }} />
        ) : (
          <StarBorderOutlinedIcon style={{ fontSize: "3rem" }} />
        )}
      </IconButton>
      <CardMedia
        component="img"
        image={character.image}
        style={{ width: "250px", height: "250px" }}
      />
      <CardContent>
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
        {/* <Box display="flex" flexWrap="wrap">
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
        </Box> */}
        <Box display="flex">
          <Typography component="span" fontWeight="fontWeightBold">
            Status:
          </Typography>
          <Typography component="span" ml={1}>
            {character.status}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
