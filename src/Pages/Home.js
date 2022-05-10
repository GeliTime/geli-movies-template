import Header from "../Components/Header";
import { useEffect, useState } from 'react';

function Home() {
    const movieTitle = ["Free Willy", "Frozen", "Titanic", "Moonlight", "Up", "Pulp Fiction", "The Negotiator"] 
    const getMovieApi = async (movies) => {
      await movies.map(async (movie) => {
       const url = `https://www.omdbapi.com/?apikey=b4bd4703&t=${movie}`;
       const response = await fetch(url);
       const responseJson = await response.json();
      console.log(responseJson)
      });
    };
  
    useEffect(()=> {
      getMovieApi(movieTitle);
    }, []);
    
    const handleSubmit = (e) => {
      e.preventDefault();

      getMovieApi();
     };
  
    const handleChange = (e) => {}
  
}
 export default Home;