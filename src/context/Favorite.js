import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritar";

export default function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    const { favorites, setFavorites } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const favoriteExists = favorites.some(item => item.id === newFavorite.id)

        let newList = [...favorites];

        if (!favoriteExists) {
            newList.push(newFavorite);
            return setFavorites(newList);
        }

        newList = favorites.filter((fav) => fav.id !== newFavorite.id);
        return setFavorites(newList);
    }

    return {
        favorites,
        addFavorite
    }
}