
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Nav/>

      <Banner/>
      <Row  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchTrending} 
      isLargeRow/>
      <Row title="Trending now" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title=" TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;