import React, { useState } from 'react';
import SearchBar from '../UI/SearchBar';
import MovieCArd from '../UI/MovieCArd';

const Movie = (props) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSearch = (searchText) => {
    setError(null);
    setLoading(true);
    fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${searchText}&embed=episodes`,
    )
      .then(searchResult => searchResult.json())
      .then(data => setResult(data._embedded.episodes))
      .catch((err) => {
        setError(err.message);
      });
    setLoading(false);
  };
  const displayMovies = () => {
    if (error) return <div>Error</div>;

    if (loading) return <div>Loading...</div>;
    if (result.length) {
      return result.map(data => <MovieCArd data={data} />);
    }
  };
  return (
    <>
      <SearchBar handleClick={handleSearch} />
      <div className="row movieWrapper">{displayMovies()}</div>
    </>
  );
};

export default Movie;
