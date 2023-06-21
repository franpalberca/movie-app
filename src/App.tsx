import { useEffect, useState } from 'react'
import './App.css'
import MovieBox from './components/MovieBox/MovieBox'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar/Navbar'

const API_KEY = "a05bfb2eb4f7c76fb556d97f5b4c0e6f";
const API_URL=`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const API_SEARCH=`${API_URL}&query`


function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() =>{
    fetch(API_URL)
    .then((res) => res.json())
    .then(data => {
      setMovies(data.results);
    })
  }, [])

  const searchMovie = async(e) => {
    e.preventDefault();
    try{
      const url = `${API_SEARCH}${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }
  
  return (
      <>
        <NavBar query={query} searchMovie={searchMovie} changeHandler={changeHandler} />
        <div className="container"> 
          <div className="grid">
            {movies.map((movie) => 
            <MovieBox key={movie.id} {...movie} />)}
          </div>
        </div>
    </>
  )
}

export default App
