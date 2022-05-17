// components are dynamic making them reusable
// movies are passed to profile, as a key value pair (eg; the weather key in the API call)
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { MenuItem } from "@material-ui/core";
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";
import "./Profile.css";

function Profile(props) {
  const movies = props.movies;
  console.log("movies", movies);
  const [selectedCountry, setSelectedCountry] = useState("");
  const selectCountryHandler = (value) => setSelectedCountry(value);
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });
  const [formInput, setFormInput] = useState({
    name: "",
    country: "",
    stateRegion: "",
    about: "",
    movies: [
      "Free Willy",
      "Frozen",
      "Titanic",
      "Moonlight",
      "Up",
      "Pulp Fiction",
      "The Negotiatior",
    ],
  });

  // const [moviesArray, setMoviesArray] = useState(movies);
  // console.log("moviesArray",moviesArray)

  const [newTitle, setNewTitle] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setNewTitle(title);
    console.log(title, " in handleChange");
  };

  const addTitle = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    console.log(formInput.movie, "is formInput.movie");
    let movieArrayCopy = [...formInput.movie];
    movieArrayCopy.push(newTitle);
    setFormInput({ ...formInput, movie: movieArrayCopy });
    console.log(newTitle, " in addTitle");
    setNewTitle("");
  };

  const handleDelete = (item, key) => {
    console.log(item, key);
    let allTitlesCopy = [...formInput.movies];
    allTitlesCopy.splice(key, 1);
    console.log(allTitlesCopy);
    setFormInput({ ...formInput, movies: allTitlesCopy });
    //  const name = e.target.getAttribute("name")
    //   setMoviesArray(movies.filter(movie => movie !== name));
  };

  return (
    <div className="profile-background">
      <h3 className="edit-your-profile">Edit Your Profile</h3>
      <h4 className="add-profile-picture">Add Your Profile Picture</h4>
      <h5 className="who-are-you">Who Are You?</h5>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        className="form-border"
      >
        <FormControl>
          <h4 className="name-label" className="label-label">
            Name
          </h4>
          <TextField id="outlined-basic" variant="outlined" />
        </FormControl>

        <div>
          <h4 className="choose-your-country" className="label-label">
            Country
          </h4>
          <Select
            style={{ width: "253px" }}
            value={selectedCountry}
            onChange={(e) => selectCountryHandler(e.target.value)}
          >
            {!!countryArr?.length &&
              countryArr.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
          </Select>
        </div>

        <FormControl>
          <h4 className="state-region-label" className="label-label">
            State/ Region
          </h4>
          <TextField id="outlined-basic" variant="outlined" />
        </FormControl>

        <FormControl>
          <br></br>
          <h4 className="about-label" className="label-label">
            About
          </h4>
          <TextField
            id="outlined-basic"
            label="Hi! Please introduce yourself: (eg, Hi! I’m Chelsea. I’m a movie fanatic from Wisconsin. I enjoy all types of movies, especially ones that have a strong female lead or involve Sammuel L Jackson.  )"
            variant="outlined"
          />
        </FormControl>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        className="form-border-two"
      >
        <FormControl>
          <h3 className="what-you-watching" className="label-label">What Have You Been Watching?</h3>
          <TextField
            id="outlined-basic"
            placeholder="Movies listed here will be added to the My Movies page and can be removed from your list upon edit."
            variant="outlined"
          />
        </FormControl>
        <FormControl>
          <h4 className="add-new-movie-label" className="label-label">Add New Movie</h4>
          <TextField id="outlined-basic" variant="outlined" />
          <button id="add-another">Add Another</button>
          <h3 className="your-movies" className="label-label">Your Movies</h3>
        </FormControl>
        {/* ********************************************************************************* */}

        {/* LAURA, we cannot get this map to show up in the UI at all - the wrapper div shows in the dev tools HTML, but nothing is nested inside. pls help */}
        <div className="movies-wrapper">
          {formInput.movies.map((movie, key) => {
            return (
              <div  key={key} className="click-title">
                <p onClick={(item) => handleDelete(item, key)}>{movie}</p>
              </div>
            );
          })}
        </div>
        {/* **************************************************************************************** */}
        <div>
          <button id="save-button">Save</button>
        </div>
      </Box>
    </div>
  );
}
export default Profile;
