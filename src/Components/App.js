import '../App.css';
import Profile from '../Pages/Profile'

function App() {
  const movieTitle = ["Free Willy", "Frozen", "Titanic", "Moonlight", "Up", "Pulp Fiction", "The Negotiator"]
  const getMovieApi = async (movies) => {
    await movies.map(async (movie) => {
     const url = `https://www.omdbapi.com/?apikey=b4bd4703&t=${movie}`;
     const response = await fetch(url);
     const responseJson = await response.json();
    console.log(responseJson)
    });
  };
     getMovieApi(movieTitle)
  return (
    <div className="App">
      <Profile/>
    </div>
  );
}

export default App;