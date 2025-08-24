import { useState } from 'react'
import './App.css'
import MovieCard from "./Components/MovieCard"

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Tim's Film", release_date: "2024", url: "https://via.placeholder.com/150" }} />
    </>
  )
}

export default App;
