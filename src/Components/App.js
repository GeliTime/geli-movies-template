import '../App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Profile from '../Pages/Profile';
import Card from "./MovieCard";
import Home from "../Pages/Home";




function App() {
  const movieTitle = ["Free Willy", "Frozen", "Titanic", "Moonlight", "Up", "Pulp Fiction", "The Negotiator"] 

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/profile' element={<Profile movies={movieTitle}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;