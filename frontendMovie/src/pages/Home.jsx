import MovieCard from "../Components/MovieCard.jsx"

function Home(){
    const movies =[
        {id:1, title:"John Wick", release_date:"2014"},
        {id:2, title:"Spiderman", release_date:"2020"},
        {id:3, title:"Avengers", release_date:"2019"},
        {id:4, title:"DoomsDay", release_date:"2011"},
    ]

    const handleSearch = () =>{

    }


    return  <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for Movies..." />
            <button type="submit" className="search-button">Search</button>
        </form>


        <div className="movies-grid">
            {movies.map(movie=><MovieCard movie={movie} key={movie.id}/>
        )}
        </div>

    </div>
}
export default Home;