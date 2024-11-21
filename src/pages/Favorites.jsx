import React, { useEffect, useState } from 'react'
import { GifState } from '../context/Context'
import Gif from '../components/Gif';

const Favorites = () => {
  const [favoriteGifs, setFavoriteGifs] = useState([]);
  const { gf, favorites } = GifState()
  const fetchFavoriteGifs = async () => {
    const { data: gifs } = await gf.gifs(favorites);
    setFavoriteGifs(gifs);
  }
  useEffect(() => {
    fetchFavoriteGifs();
  }, [])
  return (
    <div className='mt-2'>
      <span className='faded-text'>My Favorites</span>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {favoriteGifs.slice(1).map((gif) => {
          return <Gif gif={gif} key={gif.title} />
        })}
      </div>
    </div>
  )
}

export default Favorites