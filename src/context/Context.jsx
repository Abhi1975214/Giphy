import { createContext, useContext, useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
const GifContext = createContext()

const GifProvider = ({ children }) => {
    const [gifs, setGifs] = useState([])
    const [filter, setFilter] = useState("gifs")
    const [favorites, setFavorites] = useState([])
    const addToFavorites = (id) => {
        if (favorites.includes(id)) {
            const updatedFavorites = favorites.filter((itemId) => itemId != id);
            localStorage.setItem("favoriteGifs", JSON.stringify(updatedFavorites))
            setFavorites(updatedFavorites);
        }
        else {
            const updatedFavorites = [...favorites];
            updatedFavorites.push(id)
            localStorage.setItem("favoriteGifs", JSON.stringify(updatedFavorites))
            setFavorites(updatedFavorites);
        }
    }
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favoriteGifs")) || [];
        setFavorites(favorites);
    }, [])


    const gf = new GiphyFetch("ejKNT75hGrywmo1NC3Gou4MzwLvfKziK")
    return <GifContext.Provider value={{ gf, gifs, setGifs, filter, setFilter, favorites, addToFavorites }}>{children}</GifContext.Provider>
}
export const GifState = () => {
    return useContext(GifContext);
}
export default GifProvider;