import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, seturlId] = useState("");
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        // console.log(response.data)
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          seturlId(response.data.results[0]);
        }
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <img
            key={index}
            onClick={() => handleMovie(obj.id)}
            className="poster"
            src={`${imageUrl + obj.poster_path}`}
            alt="Poster"
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
