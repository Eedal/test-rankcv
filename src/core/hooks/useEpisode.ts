import { useQuery } from "@apollo/client";
import { useCallback, useMemo, useState } from "react";
import { Episode } from "../types/episode.type";
import { Location } from "../types/locations.type";

type UseEpisodeProps<T, U extends Episode | Location> = {
  query: any;
};

const useEpisode = <T, U extends Episode | Location>({
  query,
}: UseEpisodeProps<T, U>) => {
  const definitionName = query.definitions[0].name.value;

  const { loading, error, data } = useQuery<T>(query);
  const [select, setSelect] = useState("1");

  const { results: listResult, info }: { results: U[]; info: any } = useMemo(
    () => (data ? data[definitionName] : []),
    [data]
  );

  const item = useMemo(
    () => listResult.find((item) => item.id === select),
    [listResult, select]
  );

  const handleSelect = useCallback((select: string) => {
    setSelect(select);
  }, []);

  return { item, listResult, loading, error, data, select, handleSelect, info };
};

export default useEpisode;
