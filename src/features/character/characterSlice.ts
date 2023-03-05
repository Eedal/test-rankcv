import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Character } from "../../core/types/character.type";

interface FilterCharacter {
  name?: string;
}

interface characterValues {
  characters: Character[];
  filter: FilterCharacter;
}

const initialState: characterValues = {
  characters: [],
  filter: {},
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    updateCharacter: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { updateCharacter } = characterSlice.actions;

const characters = useAppSelector((state) => state.characters.characters);
const charactersFiltered = useAppSelector(
  (state) => state.characters.characters
);
const dispatch = useAppDispatch();

export default characterSlice.reducer;
