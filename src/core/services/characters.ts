import { client } from "../../graphql";
import { Login, User } from "../types/login.type";
import fetchService from "../utils/fetch-service";
import { GET_CHARACTERS } from "./queries";

const CHARACTER_SERVICE = {
  async getCharacters() {
    const { data, loading, error } = await client.query({
      query: GET_CHARACTERS,
      variables: {},
    });

    return {
      data,
      loading,
      error,
    };
  },
};

export default CHARACTER_SERVICE;
