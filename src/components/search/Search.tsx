import { Box, TextField } from "@mui/material";

const Search = ({ setSearch }: SearchProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Busca por el nombre del personaje"
        variant="outlined"
        sx={{width: 400}}
        onChange={(e) => setSearch(e.target.value)}
      />
      
    </Box>
  );
};

type SearchProps = {
  setSearch: (value: string) => void;
};

export default Search;
