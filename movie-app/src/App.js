
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import Filter from './Filter';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "The Matrix",
      description: "A hacker discovers the truth about reality.",
      posterURL: "https://example.com/matrix.jpg",
      rating: 5
    },
    {
      title: "Inception",
      description: "A thief enters dreams to steal secrets.",
      posterURL: "https://example.com/inception.jpg",
      rating: 4
    }
  ]);
  const [filter, setFilter] = useState({ title: '', rating: '' });

  const filterTitle = (title) => {
    setFilter(prev => ({ ...prev, title }));
  };

  const filterRating = (rating) => {
    setFilter(prev => ({ ...prev, rating }));
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
    (filter.rating === '' || movie.rating >= Number(filter.rating))
  );

  return (
    <div className="App">
      <Filter filterTitle={filterTitle} filterRating={filterRating} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: "New Movie",
        description: "A description of the new movie.",
        posterURL: "https://example.com/newmovie.jpg",
        rating: 3
      })}>
        Add Movie
      </button>
    </div>
  );
}

export default App;
