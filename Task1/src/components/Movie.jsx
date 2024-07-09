import React from 'react';
import data from '../assets/data/data.js'; // Assuming the data is in a separate file named data.js
import '../style/Movie.css'

const Movie = () => {
    return (
        <>
            <h2 className='heading'>Infolabz'z Task 1</h2>
            <div className="movie-container">
                {data.map((movie, index) => (
                    <div key={index} className="movie-card">
                        <img src={movie.photo} alt={movie.name} className="movie-image" />
                        <div className="movie-details">
                            <h2 className="movie-title">{movie.name}</h2>
                            <p className="movie-type">{movie.type}</p>
                            <p className="movie-description">{movie.description}</p>
                            <div className="movie-cast">
                                <h3>Cast:</h3>
                                <ul>
                                    {movie.cast.map((actor, actorIndex) => (
                                        <li key={actorIndex}>{actor}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Movie;