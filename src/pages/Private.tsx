import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/Navbar/Navbar';
import MovieBox from '../components/MovieBox/MovieBox';
import { LOGOUT } from '../config/routes/paths';
import { Link } from 'react-router-dom';

const API_KEY = 'a05bfb2eb4f7c76fb556d97f5b4c0e6f';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const API_SEARCH = `${API_URL}&query`;

export const Private = () => {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	}, [query]);

	const searchMovie = async (e): Promise<void> => {
		e.preventDefault();
		try {
			const url = `${API_SEARCH}${query}`;
			const res = await fetch(url);
			const data = await res.json();
			setMovies(data.results);
		} catch (error) {
            console.log(error);
        }
	};

	const changeHandler = (e) => {
		setQuery(e.target.value);
	};

	return (
		<>
			<NavBar movies={movies} query={query} searchMovie={searchMovie} changeHandler={changeHandler} />
            <Link to={LOGOUT}>Cerrar sesión</Link>
			<div className="container">
				<div className="grid">
					{movies.map((movie) => (
						<MovieBox key={movie.id} {...movie} />
					))}
				</div>
			</div>
		</>
	);
};
