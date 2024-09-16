import useSWR from "swr"

const fetcher = (url)=>fetch(url).then(resp => resp.json()).then(
  response=>{
    console.log(response.results)
    return response.results
 }
)

function useFetch() {
    const apiKey = "" // cada uno debe poner su api key aqui
    const routeLink = "games"  // esta es la ruta que queramos emplear para la api
    const gameSearch = "Mario"
    const pageSize = "3"

    const {data, error, isLoading} = useSWR(`https://api.rawg.io/api/${routeLink}?key=${apiKey}&search=${gameSearch}&page_size=${pageSize}`, fetcher)

    //https://api.rawg.io/api/games?key=123456&search=Mario&page_size=3

    // const {data, error, isLoading} = useSWR(`https://api.rawg.io/api/${link}?key=${apiKey}&search=Mario&page_size=41`, fetcher)
  return {
    data,
    error,
    isLoading,
  }
}

export default useFetch
