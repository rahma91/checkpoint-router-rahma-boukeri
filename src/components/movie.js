import React, { useState, useEffect } from 'react'
import { MoviesData } from './MoviesData'

const movie = ({match}) => {
     const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(MoviesData.find(movie => movie.id === +match.params.id))
    }, [match.params.id]);

    return (
        <div className="product-details">
            <h1>{movie.title}</h1>
            <img src={movie.img} alt="movie" style={{ width: "200px" }} />
            <br />
          
        </div>
    )
}

export default movie
