import {Modal, Button} from 'react-bootstrap';
import {useState} from 'react';
import { ModalProps } from '../../types/Modal';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const CustomModal: React.FC<ModalProps> = ({title, poster_path, vote_average, release_date, overview}) => {
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<>
			<button type="button" className="btn btn-dark" onClick={handleShow}>
				View more
			</button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title></Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img className="card-img-top" src={API_IMG + poster_path} alt="Movie Poster" />
					<h3>{title}</h3>
					<h4>IMDb: {vote_average}</h4>
					<h5>Release Date: {release_date}</h5>
					<br />
					<h6>Overview</h6>
					<p>{overview}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CustomModal;
