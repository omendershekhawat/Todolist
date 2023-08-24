import React, { useState } from 'react'
import axios from 'axios'
// import "./MovieSearch.css";

function MovieSearch() {
  const [MovieName, setMovieName] = useState('')
  const [movie, setMovie] = useState([])
  const url = 'https://image.tmdb.org/t/p/original'

  function handleSubmit(e) {
    e.preventDefault();

    axios.get('https://api.themoviedb.org/3/search/movie?query=+ &api_key=Your _Api_Key&include_adult=false&language=en-US&page=1')
      .then((result) => {
        setMovie(result.data.results)
        console.log(result.data.results[0])
      })

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='SearchMovie' value={MovieName} onChange={(e) => setMovieName(e.target.value)} />
        <button type='submit'>Search</button>

      </form>


      {movie.map((val, index) => {
        return (
          <div className='image' key={index}>

            <img src={url + val[index].poster_path} alt="hello" />
          </div>
        )
      })}



    </>
  )
}

export default MovieSearch





  // (`https://api.themoviedb.org/3/search/movie?query=${MovieName}&api_key=30e8aa87cf54031d9840b817d2975ed0`)