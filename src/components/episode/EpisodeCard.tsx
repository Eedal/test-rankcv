import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@mui/material";
import { Episode } from "../../core/types/episode.type";

type EpisodeCardProps = {
  episode: Episode;
}

const EpisodeCard = ({episode}: EpisodeCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 150,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {episode.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {episode.air_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
