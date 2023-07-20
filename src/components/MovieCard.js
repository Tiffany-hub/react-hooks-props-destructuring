// import React from "react";

function MovieCard({
  title,
  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;


// import React from "react";
//  function MovieCard() {
//   return (
//     <div className = "movie-card">
//     <img
//     src = "https://i.pinimg.com/236x/9d/5e/4a/9d5e4a95884d9bb70bc101f7ed8461d4.jpg"
//     alt = "King the Land : K-drama"
//     ></img>
//     <h2>King the Land : K-drama</h2>
//     <small>Genres: Romance, Comedy, Emotional</small>
//     </div>
//   );
//  }