import {FC} from 'react'
import CustomModal from '../Modal/Modal'
import { ModalProps } from '../../types/Modal';

const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieBox:FC<ModalProps> = ({title, poster_path, vote_average, release_date, overview}) => {

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+poster_path} />
                <div className="card-body">
                    <CustomModal
                    title={title}
                    poster_path={poster_path}
                    vote_average={vote_average}
                    release_date={release_date}
                    overview={overview}
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieBox;