import { useAppDispatch } from "../../hooks";
import { useState } from "react";
import { handleNotification } from "../../features/notification/notificationSlice";

const useFavorites = () => {
  const dispatch = useAppDispatch();

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
      dispatch(
        handleNotification({
          isOpen: true,
          text: `Agregado personaje ${id} a favoritos`,
        })
      );
    } else {
      favoritesLocal.splice(index, 1);
      setFavorites(favoritesLocal);
      dispatch(
        handleNotification({
          isOpen: true,
          text: `Removido personaje ${id} de favoritos`,
          severity: 'info',
        })
      )
    }
    localStorage.setItem("favorites", JSON.stringify(favoritesLocal));
  };
  return { favorites, handleFavorites };
};

export default useFavorites;
