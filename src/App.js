import logo from './logo.svg';
import './App.css';
import CountriesDetails from './Components/CountriesDetails';
import {Routes,Route,useNavigate} from 'react-router-dom';
import MapViewComponent from './Components/MapViewComponent';
import Button from 'react-bootstrap/esm/Button';
import NavbarComponent from './Components/NavbarComponent';

function App() {
  
  return (
    <div className="App">
      <NavbarComponent/>
      {/* <CountriesDetails/> */}
      {/* <Button onClick={navigateToMapPage}>Maps Page</Button> */}
      
      {/* <Routes>
      <Route path='/mapsDataPage' element={<MapViewComponent/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
