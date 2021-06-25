import './HomeScreen.css'
import '../../components/Nav/Nav'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import requests from '../../Request'
import Row from '../../components/Row/Row'


function HomeScreen() {
    return (
        <div className="homescreen">
            {/* NAV */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Rows*/}
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
