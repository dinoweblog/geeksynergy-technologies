import { useEffect, useState } from "react";
import { API_LINK } from "../../apis";
import axios from "axios";
import moment from "moment";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import "./style.css";

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = () => {
    setLoading(true);
    axios
      .post(API_LINK, {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((res) => {
        setData(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  if (loading)
    return (
      <h4 style={{ textAlign: "center", marginTop: "60px" }}>Loading...</h4>
    );

  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "50px" }}>
      <h2 style={{ textAlign: "center" }}>Movies List</h2>

      <div className="movieContainer">
        {data.map((movie) => (
          <div className="movieCard" style={{ width: "100%" }}>
            <div className="movieContent">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <button className="votingBtn">
                  <TiArrowSortedUp />
                </button>
                <p>{movie.voting}</p>
                <button className="votingBtn">
                  <TiArrowSortedDown />
                </button>
                <p>Votes</p>
              </div>
              <div>
                <img src={movie.poster} alt={movie.title} />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <h3>{movie.title}</h3>
                <p>{`Genre: ${movie.genre}`}</p>
                <p>
                  <span>Director: </span>
                  {movie.director.map((item) => (
                    <span>{item}</span>
                  ))}
                </p>
                <p>
                  <span>Starring: </span>
                  {movie.stars.map((item) => (
                    <span>{item}</span>
                  ))}
                </p>
                <p>{`${movie.runTime ? movie.runTime : ""} Mins | ${
                  movie.language
                } | ${moment(new Date(movie.releasedDate)).format(
                  "DD MMM YYYY"
                )}`}</p>
                <p
                  style={{ color: "#009FBD" }}
                >{`${movie.pageViews} views | Voted by ${movie.totalVoted} People`}</p>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#009FBD",
                border: "none",
                color: "#ffffff",
                borderRadius: "4px",
              }}
            >
              Watch Trailer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
