import React from 'react';

const MovieCard = ({
  data: {
    image: { medium },
    name,
    season,
    number,
    summary
  }
}) => (
  <div className="cardContainer">
    <div className="cardWrapper">
      <div className="card">
        <div className="image__container">
          <img className="image" src={medium} alt="love movie" />
        </div>

        <ul>
          <li>
            <span className="tag">name:</span>
            {name}
          </li>
          <li>
            <span className="tag">season:</span>
            {season}
          </li>
          <li>
            <span className="tag">number:</span>
            {number}
          </li>
        </ul>
      </div>
      <div className="summery">
        <h3 className="tag">summery:</h3>
        {summary.slice(3, summary.length - 4)}
      </div>
    </div>
  </div>
);

export default MovieCard;
