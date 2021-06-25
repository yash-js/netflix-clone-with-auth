import './Banner.css'
import axios from '../../axios'
import requests from '../../Request'
import { useEffect, useState } from 'react'



function Banner() {

    const [movie, setMovie] = useState([])



    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)])
            return request
        }

        fetchData()
    }, [])

    console.log(movie)


    return (
        <header className="banner" style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center',
            backgroundColor: "#0000007a",
            backgroundBlendMode: 'color',
            objectFit: 'contain'


        }}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">Mylist</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeButton" />

        </header>
    )
}

export default Banner
