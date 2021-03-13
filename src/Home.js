import React, { useState } from 'react'
import FilterByName from './components/FilterByName';
import Footer from './components/Footer';
import Rating from './components/Rating';
import MoviesListe from './components/MoviesListe';
import { MoviesData } from "./components/MoviesData";

const Home = () => {
    
      const [movies, setMovies] = useState(MoviesData)
      const [recherche, setRecherche] = useState("");
      const [rate, setRate] = useState(1);

      const addMovie=(newMovie) =>
      {
          setMovies([...movies,newMovie])
      }

    return (
        <div>
            
            <div style={{display:'flex' ,justifyContent:'center'}}>
            <FilterByName setRecherche={setRecherche} />

            <Rating  FilterRating={true} setRate={setRate} rate = {rate} />

      </div>
      <MoviesListe movies={movies} recherche={recherche} rate={rate} addMovie={addMovie}
        style={{display: "flex", justifyContent: "center"}} />

     
    
        </div>
    )
}

export default Home
