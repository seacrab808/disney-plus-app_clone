import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  // spiderman ===>  request  ===> the moviedb api
  const useQuery = () => {
    return new URLSearchParams(useLocation().search); //?q=spiderman
  };

  let query = useQuery();
  const searchTerm = query.get("q"); //spiderman
  const debouncedValue = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedValue) {
      fetchSearchMovie(debouncedValue);
    }
  }, [debouncedValue]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(response.data.results);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }

    if (searchResults.length > 0) {
      return (
        <section className="search-container">
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
              const movieImageUrl =
                "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

              return (
                <div key={movie.id} className="movie">
                  <div
                    onClick={() => navigate(`/${movie.id}`)}
                    className="movie__column-poster"
                  >
                    <img
                      src={movieImageUrl}
                      alt={movie.name}
                      className="movie__poster"
                    />
                  </div>
                </div>
              );
            }
          })}
        </section>
      );
    } else {
      return (
        <section className="no-results">
          <div className="no-results__text">
            <p>찾고자하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.</p>
          </div>
        </section>
      );
    }
  };
  return <div></div>;
};

export default SearchPage;
