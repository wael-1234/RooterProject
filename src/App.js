import React from 'react';
import { useState } from 'react';
import "./App.css"
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import Imagealaddin from "./Pictures/aladdin.png"
import Imageaquarela from "./Pictures/aquarela.png"
import Imagedarkphoenix from "./Pictures/darkphoenix.png"
import ImageFrozen2 from "./Pictures/frozen2.png"
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
 
  const [movies,setMovies]= useState([
    {
      id:"1",
      Title:"  ALADDIN" ,
      Description:"Aladdin est un Film d'aventures fantastique américain coécrit et réalisé par Guy Ritchie et sorti en 20191..",
      Rate: "4",
      Image:Imagealaddin,
      trailer:"https://www.youtube.com/embed/foyufD52aog"
    },
    {
      id:"2",
      Title:"  AQUARELA" ,
      Description:"Aquarela est un voyage spectaculaire à travers la beauté fascinante de l’Eau,l’élément le plus précieux de la Terre..",
      Rate: "2",
      Image:Imageaquarela,
      trailer:"https://www.youtube.com/embed/3xAIuDF25kE"
    },
    {
      id:"3",
      Title:"DARK PHOENIX" ,
      Description:"Au cours d'une mission de sauvetage dans l'espace, Jean Grey frôle la mort, frappée par une mystérieuse force cosmique..",
      Rate:"5" ,
      Image:Imagedarkphoenix,
      trailer:"https://www.youtube.com/embed/1-q8C_c-nlM"
    },
    {
      id:"4",
      Title:"FROZEN II" ,
      Description:"Pourquoi Elsa est-elle née avec des pouvoirs magiques ? La jeune fille rêve de l’apprendre, mais la réponse met son royaume en danger.",
      Rate:"3" ,
      Image:ImageFrozen2,
      trailer:"https://www.youtube.com/embed/Zi4LMpSDccc"
    },
  ])

  const getMovieById = (id) => {
    return movies.filter(movie=>movie.id==id)[0];
  }

  return (
    <>
      <div className="logo">
        <Link to="/">
            SITE LOGO
        </Link>
      </div>
      <Routes>
        <Route  path="/" element={<Home movies={movies} setMovies={setMovies}/>} />
        <Route  path="/:id" element={<SingleMovie getMovieById={getMovieById}/>} />
      </Routes>
      
      
    </>
  )
};


