import { useState } from "react";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, id];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter(
        (favoriteId) => favoriteId !== id
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleFavorites = (id: string) => {
    const favoritesLocal = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    const index = favoritesLocal.indexOf(id);

    if (index === -1) {
      addFavorite(id);
    } else {
      removeFavorite(id);
    }
  };
  return { favorites, addFavorite, removeFavorite, handleFavorites };
};

export default useFavorites;
