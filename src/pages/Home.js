
import { useState } from 'react';
import AddMovie from '../components/AddMovie';
import Filter from '../components/Filter';
import MovieList from "../components/MovieList"

const Home = ({movies,setMovies}) => {
    const [keyWord,setKeyWord]=useState("");
    const [show,setShow]= useState(false);

    const addNewMovie = newMovie => {
        setMovies([newMovie, ...movies])
    }
    
    const handleChange=(x)=>{
        setKeyWord(x);
    };
    return(
        <div style={{textAlign:'center'}}>
            <h1 style={{fontSize:'70px',textAlign:'center'}}>MOVIE LIST</h1>
            <Filter handleChange={handleChange}/>
            <button  style={{marginTop:'20px'}}onClick={()=>setShow(true)}> Add New Movie</button>
            {show&&<AddMovie addNewMovie={addNewMovie}/>}
            <MovieList movies={movies.filter(el=>el.Title.toUpperCase().includes(keyWord.toUpperCase()))}/>    
        </div>
    )
};

export default Home;