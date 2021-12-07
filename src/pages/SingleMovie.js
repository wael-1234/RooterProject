import {
    useParams
  } from "react-router-dom";
  import {Navigate} from 'react-router-dom';
import MovieCard from "../components/MovieCard";

const SingleMovie = ({getMovieById}) => {
    let { id } = useParams();
    console.log("matchmatch",getMovieById(id));
    const movie = getMovieById(id);
    if(!movie){
        return(
            <Navigate to="/" />
        )
    }
    return(
        <div className="single-movie">
            {
                movie?
                    <MovieCard movie={movie}/>
                    :null
            }
            {
                movie?.trailer?
                <iframe width="677" height="381" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    :null
            }
            
        </div>
    )
};

export default SingleMovie;