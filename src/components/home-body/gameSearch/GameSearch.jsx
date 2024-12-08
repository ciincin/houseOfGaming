import { useState, useEffect } from "react";
import GameCard from "../gameCard/GameCard";
import useFetchFree from "../../Fetch-freeToGame/useFetchFree";
import "./GameSearch.css";
import BasicDropdown from "../../../components-victor/dropdown/BasicDropdown";
import dices from "../../../assets/icons/dices68.svg";
import reset from "../../../assets/icons/reset2.png";
import search from "../../../assets/icons/search.png";

function GameSearch() {
  const { data = [], error, isLoading } = useFetchFree();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(0);
  const [numOfPages, setNumOfPages] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  const sortByFilter = [
    { item: "New releases", value: "New releases" },
    { item: "Legacy games", value: "Legacy games" },
  ];

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  function handleDropdownGenre(e) {
    setSelectedGenre(e.target.innerText);
  }

  function handleDropdownSort(e) {
    setSelectedSort(e.target.innerText);
    console.log(selectedSort);
  }

  function handleRandomize(e) {
    setSelectedSort("");
    setTimeout(() => {
      setSelectedSort("Randomize");
    }, 50);
  }

  function handleReset() {
    setSelectedGenre("");
    setSearchQuery("");
    setSelectedSort("");
  }

  function handlePage(event) {
    setPage(Number(event.target.innerText) - 1);
  }

  function populateDropdown() {
    if (data.length > 0) {
      const differentGenres = [...new Set(data.map((game) => game.genre))]; // Extraer géneros únicos

      const genreNoAction = differentGenres.filter(
        (genre) => !genre.includes("Action")
      );

      const genreNoARPG = genreNoAction.filter((genre) => genre !== "ARPG");

      genreNoARPG.push("Action Games");

      const orderedGenres = genreNoARPG.sort().slice(1, 19);
      const filterDifferentGenres = orderedGenres.map((genre) => ({
        item: genre,
        value: genre.toLowerCase(),
      })); // Formatear géneros

      setGenres(filterDifferentGenres);
    }
  }

  useEffect(() => {
    if (data.length > 0) {
      console.log("Fetched Data:", data); // Log the fetched data

      //generateRandomGames();
      populateDropdown();
    }
  }, [data]);

  function divideArrayInParts(array, partSize) {
    let result = [];
    for (let i = 0; i < array.length; i += partSize) {
      let part = array.slice(i, i + partSize);
      result.push(part);
    }
    return result;
  }

  useEffect(() => {
    let filtered = data;

    if (searchQuery != "" || selectedGenre != "") {
      // Apply sorting first, independent of genre selection

      if (selectedSort === "New releases") {
        console.log("Applying sort - new releases");
        filtered = [...filtered].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        setFilteredGames(filtered);
      }

      if (selectedSort === "Legacy games") {
        console.log("Applying sort - legacy games");
        filtered = [...filtered].sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
      }

      // Apply genre filtering after sorting
      if (selectedGenre) {
        if (selectedGenre == "Action Games") {
          filtered = filtered.filter(
            (game) => game.genre.includes("Action") || game.genre === "ARPG"
          );
        } else {
          filtered = filtered.filter((game) => game.genre === selectedGenre);
        }
      }

      // Apply search query filtering
      if (searchQuery) {
        filtered = filtered.filter((game) =>
          game.title?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (selectedSort === "Randomize") {
        console.log("Applying sort - randomize");
        filtered = [...filtered].sort(() => Math.random() - 0.5);
        setFilteredGames(filtered);
      }

      // Update the filteredGames state
      setFilteredGames(filtered);
    } else {
      filtered = data.sort(() => Math.random() - 0.5).slice(0, 12);
      setFilteredGames(filtered);
    }
  }, [searchQuery, selectedGenre, selectedSort, data]);

  useEffect(() => {
    const pagination = divideArrayInParts(filteredGames, 12);
    setSearchResults(pagination);

    const pages = Array.from({ length: pagination.length }, (_, i) => i + 1);
    setNumOfPages(pages);
    setPage(0); // Reset to the first page on new search
  }, [filteredGames]);

  useEffect(() => {
    console.log(filteredGames);
  }, [filteredGames]);

  useEffect(() => {
    console.log(genres);
  }, [genres]);

  useEffect(() => {
    console.log(numOfPages);
  }, [numOfPages]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div className="search-wrapper">
        <label htmlFor="game-search">
          <h1 className="search-title">Search your games!</h1>
        </label>

        <div className="functionalities-wrapper">

          <div className={`search-input`}>
            <input
              id="game-search"
              type="text"
              value={searchQuery}
              onChange={handleSearchQuery}
              placeholder="Search for a game..."
            />
          </div>

          <div className="btn-wrapper">
            {genres.length ? (
              <div className="filter-wrapper">
                <BasicDropdown
                  btnName={selectedGenre != "" ? selectedGenre : "Genres"}
                  objectsArray={genres}
                  handleOnClick={handleDropdownGenre}
                />
                <BasicDropdown
                  btnName={selectedSort != "" ? selectedSort : "Sort by"}
                  objectsArray={sortByFilter}
                  handleOnClick={handleDropdownSort}
                />
                <img
                  className="dices-randomize"
                  src={dices}
                  onClick={handleRandomize}
                  alt="Randomize"
                  title="Randomize!"
                ></img>
                <img
                  className="reset-spinner"
                  src={reset}
                  onClick={handleReset}
                  alt="reset changes"
                  title="Reset search!"
                ></img>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="game-card-wrapper">
        {searchResults.length > 0 ? (
          searchResults[page].map((game) => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <div className="no-found">No results found</div>
        )}
      </div>
      <div className="page-btn-wrapper">
        {numOfPages.length > 0 &&
          (selectedGenre != "" || selectedSort != "" || searchQuery != "") &&
          numOfPages.map((page, index) => {
            return (
              <button className="page-btn" onClick={handlePage} key={index}>
                {page}
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default GameSearch;
