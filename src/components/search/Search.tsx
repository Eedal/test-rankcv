import { Box, Button, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

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
  setSearch: Dispatch<SetStateAction<string>>;
};

export default Search;
