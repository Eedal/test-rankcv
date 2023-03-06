import React, { Dispatch, SetStateAction, useState } from "react";
import { Chip, List, ListItem, ListItemText, Typography } from "@mui/material";
import { GET_CHARACTERS } from "../../core/services/queries";
import { useQuery } from "@apollo/client";

type MainFilterProps = {
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
};

type OptionsProps = {
  label: string;
  value: "Alive" | "Dead" | "Unknown";
};
const OPTIONS: OptionsProps[] = [
  {
    label: "Alive",
    value: "Alive",
  },
  {
    label: "Dead",
    value: "Dead",
  },
  {
    label: "Unknown",
    value: "Unknown",
  },
];

const MainFilter = ({ status, setStatus }: MainFilterProps) => {
  const handleFilterClick = (filter: string) => {
    setStatus(filter);
  };

  return (
    <>
      <Typography variant="h6" >Filters:</Typography>
      {status && (
        <Chip
        sx={{marginY: 1}}
          label={status}
          onDelete={() => {
            setStatus("");
          }}
        />
      )}
      <Typography variant="h6">Filter Options:</Typography>
      <Typography variant="h6">Status:</Typography>
      {OPTIONS.map(({ label, value }) => (
        <Chip
          key={label}
          label={label}
          onClick={() => handleFilterClick(value)}
          color={status === value ? "primary" : "default"}
        />
      ))}
    </>
  );
};

export default MainFilter;
