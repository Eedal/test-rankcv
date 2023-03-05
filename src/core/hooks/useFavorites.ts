import { useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const handleFavorites = (id: string) => {
    const favoritesLocal = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const index = favoritesLocal.indexOf(id);

    if (index === -1) {
      setFavorites((prevFavorites) => [...prevFavorites, id]);
      favoritesLocal.push(id);
    } else {
      favoritesLocal.splice(index, 1);
      setFavorites(favoritesLocal);
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesLocal));
  };
  return { favorites, handleFavorites };
};

export default useFavorites;
