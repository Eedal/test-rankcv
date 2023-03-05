import { Box, Grid, Skeleton } from "@mui/material";

type SkeletonCardProps = {
  maxWidth: number;
};

const SkeletonCard = ({ maxWidth }: SkeletonCardProps) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} marginTop={5}>
      <Box
        sx={{
          maxWidth: maxWidth,
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Skeleton variant="rectangular" width={maxWidth} height={200} />
        <Box padding={2}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="50%" />
        </Box>
      </Box>
    </Grid>
  );
};

export default SkeletonCard;
