import './App.css';
import CardArtist from './Components/CardArtist/CardArtist';
import artist from "./Mocks/Artist";
import artistService from './Services/ArtistService';
import logoSpoti from './logo-spotify.png';

function App() {

let artistInfo = artistService.getArtistByIds("2CIMQHirSU0MQqyYHq0eOx, 1vCWHaC5f2uS3yhpwWbIA6");


  return (
    
    <div className="App">
      <header className="App-header">
      <img src="https://www.constructorabolivar.com/sites/all/themes/constructora/assets/icons/logo-constructora-bolivar.svg" alt="Logo Construtora Bolívar"/>
      </header>
      <div className="App-container">
        <div className='cards-artist-container'>
          {<CardArtist imgUrl={artist.images[0].url} title={artist.name} span={artist.genres}></CardArtist>}
          {<CardArtist imgUrl={artist.images[0].url} title={artist.name} span={artist.genres}></CardArtist>}
          {<CardArtist imgUrl={artist.images[0].url} title={artist.name} span={artist.genres}></CardArtist>}
          {<CardArtist imgUrl={artist.images[0].url} title={artist.name} span={artist.genres}></CardArtist>}
          {<CardArtist imgUrl={artist.images[0].url} title={artist.name} span={artist.genres}></CardArtist>}
        </div>
      </div>
      <footer className="App-footer">
      <img src={logoSpoti} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;