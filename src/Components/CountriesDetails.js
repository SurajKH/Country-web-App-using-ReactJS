import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import MapViewComponent from './MapViewComponent';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBIcon} from 'mdbreact';





const CountriesDetails = () => {

    //lets consider the fetch data functionality.

    //we have considered a filter operation...

    const [countriesData,setCountriesData]=useState([]);

    const [countryName,setCountryName]=useState('');
    //lets maintain all the countries details over here.
    
    const fetchData=async()=>
    {
       const response=await fetch('https://restcountries.com/v3.1/all');
       return response.json();
    };

    // const handleClick=(event)=>
    // {
    //   console.log('Country being selected');
    // }

    //lets consider the useEffect to render the details over here.

    useEffect(()=>
    {
        //we are considering the concept of fetching the details over here.
       fetchData().then((res)=>
       {
         console.log(res);
         setCountriesData(res);
       })
    },[]);

  return (
    <React.Fragment>
    {
        countriesData.map((countries)=>
        (
         <>

            {/* <img src={countries.flags.png} width={"20px"} height={"30px"}/>   */}
            </> 
        ))
       
    }
    <br/>
    <br/>

    
    <input size={"23px"} style={{borderBottom:"2px solid black",padding:"10px",borderRadius:"15px",margin:"12px"}}placeholder='Enter the Region:' onChange={(event)=>{
        setCountryName(event.target.value);
      }}></input>
      <MDBIcon fab size='lg'  icon="searchengin" />
    
     <br/>
     <br/>
     Region:{
      countryName
    }
    <br/>
    <br/>
    <br/>
    <Row xs={1} md={4} sm={1} lg={6}>

          {
      countriesData.filter(country=> country.region===countryName).map(
        (countries)=>
        (
          <Col style={{margin:"5px"}}>
          <Card>
          <Card.Body>
            <Card.Text style={{fontSize:"1rem"}}>{countries.capital[0]}</Card.Text>
            <Card.Img src={countries.flags.png}
            width={"50px"}
            height={"100px"} variant='top' />
             <Card.Text style={{fontSize:"1rem"}}>Capital: {countries.capital[0]}</Card.Text>
             <Card.Text style={{fontSize:"1rem"}}>Common Name:{countries.name.common}</Card.Text>
             <Card.Text style={{fontSize:"1rem"}}>Coat of Arms</Card.Text>
             <Card.Img src={countries.coatOfArms.png}
            width={"50px"}
            height={"100px"} variant='top' />
          </Card.Body>
         
        
          </Card>
          </Col>
          
           
        )
      )
    }   
          </Row>
    {/* <MapViewComponent/> */}
    </React.Fragment>
  )
};

export default CountriesDetails;

