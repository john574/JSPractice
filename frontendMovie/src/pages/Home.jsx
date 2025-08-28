import MovieCard from "../Components/MovieCard.jsx"
import "../css/Home.css"
import { useState } from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {id:1, title:"John Wick", release_date:"2014"},
    {id:2, title:"Spiderman", release_date:"2020"},
    {id:3, title:"Avengers", release_date:"2019"},
    {id:4, title:"DoomsDay", release_date:"2011"},
  ];

  // Filter movies based on searchQuery
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    // Optional: remove alert para hindi nakakainis 😅
    console.log("Searching:", searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Search for Movies..." 
          className="search-input" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <MovieCard movie={movie} key={movie.id}/>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  )
}

export default Home;
