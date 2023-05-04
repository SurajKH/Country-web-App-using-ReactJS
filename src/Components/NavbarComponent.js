import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import MapViewComponent from './MapViewComponent';
import { BrowserRouter, Link, Route,Routes } from 'react-router-dom';
import CountriesDetails from './CountriesDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrenciesComponent from './CurrenciesComponent';


function NavbarComponent(){

  return (
    <React.Fragment>
    <BrowserRouter>
         {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
            <Nav.Link as={Link} href="/mapsDataPage">Maps </Nav.Link>
            <Nav.Link to="/currenciesPage">Currencies</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Nav className="mr-auto "style={{backgroundColor:"#e3f2fd"}}>
<NavItem>   <Link className="nav-link" style={{fontSize:"1.3rem"}}  to="/" >Home</Link> </NavItem> 
<NavItem>   <Link  
 style={{fontSize:"1.3rem"}} className="nav-link" to="/mapsDataPage">Maps</Link> </NavItem> 
<NavItem>    <Link 
 style={{fontSize:"1.3rem"}} className="nav-link"   to="/currenciesDataPage">Details</Link> </NavItem> 
</Nav>

      <Routes>
      <Route exact path="/" element={<CountriesDetails/>}></Route>
        <Route path="/mapsDataPage" element={<MapViewComponent/>}></Route>
        <Route path="/currenciesDataPage" element={<CurrenciesComponent/>}></Route>
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
};

export default NavbarComponent;