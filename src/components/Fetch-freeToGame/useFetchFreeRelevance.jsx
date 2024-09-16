import useSWR from "swr";

const apiKey = "ab0528e101msh81b3089060148d8p13e97cjsn9c0e28d0e6a1"; // cada uno debe poner su api key aqui


const headers = {
  "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
  "x-rapidapi-key": apiKey,
};

const fetcher = (url) =>
  fetch(url, { mode: "cors", headers })
    .then((resp) => resp.json())
    .then((response) => {

      return response; // Devuelve toda la respuesta
    });

function useFetchFree() {
  const { data, error } = useSWR(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=relevance`,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error, // isLoading será true si no hay datos ni error
  };
}

export default useFetchFree;
