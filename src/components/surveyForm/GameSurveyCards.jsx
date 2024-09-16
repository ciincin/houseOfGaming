import SurveyComponent from "./SurveyComponent"
import { useEffect, useState } from "react"

function GameSurveyCards({ array }) {
    // saber que filtros se van a usar (respuesta de la encuesta)
    function isActive(filter){
        filter=!filter
    }

    function filterGames(){
        //2da respuesta, generos
        // hacer un loop para detectar cuantos generos se han seleccionado
        array.some(game => game.genre).some(false).some(true) //ejemplo

        //3era respuesta, plataforma del juego
        // refactorizar con un condicional "?"
        if(webBrowser){
            array.filter(game => game.platform == "Web Browser")
        }
        if(pcDownload){
            array.filter(game => game.platform == "PcDownload")
        }

        //5ta respuesta, juegos nuevos o viejos
        if(newGames){
            array.sort((a, b)=> new Date(b.release_date) - new Date(a.release_date)) // de mas nuevo a mas viejo
        }
        if(oldGames){
            array.sort((a, b)=> new Date(a.release_date) - new Date(b.release_date)) // de mas viejo a mas nuevo
        }
        // si se selecciona que no hay preferencia no hay nada que filtrar, por lo tanto un Math.random


        // antes de devolver
        if (array.length > 4){
            const showGames = array.slice(0,5);
            showGames.map(game => gameCard); // esto va en el return
        } else {
            array.map(game => gameCard); // esto va en el return
        }
   
    }


  return (
    <div>GameSurveyCards</div>
  )
}

export default GameSurveyCards