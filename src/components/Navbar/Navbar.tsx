import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'
import { FC } from 'react';
import { NavBarProps } from '../../types/NavBar';


const NavBar: FC<NavBarProps> = ({ movies, query, searchMovie, changeHandler }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchMovie(movies);
    };
return (
	<>
		<Navbar bg="dark" expand="lg" variant="dark">
			<Container fluid>
				<Navbar.Brand href="">TheMovieDB APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-3" style={{maxHeight: '100px'}} navbarScroll></Nav>
                    <Form className="d-flex" onSubmit={handleSubmit}>
                        <FormControl type="search" placeholder="Movie Search" className="me-2" aria-label="search" name="query" value={query} onChange={changeHandler}></FormControl>
                        <Button variant="secondary" type="submit">
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
			</Container>
		</Navbar>
	</>
);
};

export default NavBar;
