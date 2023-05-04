import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {MDBIcon} from 'mdbreact';

function MapViewComponent()
{
    const [mapsData,setMapsData]=useState([]);

    const [countryName,setCountryName]=useState('');
    //click on the button to redirect to a new link.
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
         setMapsData(res);
       })
    },[]);

   

   return(
    <React.Fragment>

     <input size={"23px"} style={{borderBottom:"2px solid black",padding:"10px",borderRadius:"15px",margin:"12px"}}placeholder='Enter the Region:' onChange={(event)=>{
        setCountryName(event.target.value);
      }}></input>
      <MDBIcon fab size='lg'  icon="searchengin" />
    
      
      
<Row xs={1} md={4} lg={8}>

{
mapsData.filter(country=> country.region===countryName).map(
(countries)=>
(
<Col  style={{margin:"5px"}}>
<Card  className='w-500 hover-shadow'>
<Card.Body>
  <Card.Text>{countries.capital[0]}</Card.Text>
  <Card.Img src={countries.flags.png}
  width={"50px"}
  height={"100px"} variant='top' />
  <Button variant="dark" onClick={(event)=>{event.preventDefault()
       window.location.href=`${countries.maps.googleMaps}`}}>Google Maps View</Button>

    <Button variant="primary" onClick={(event)=>{event.preventDefault()
       window.location.href=`${countries.maps.openStreetMaps}`}}>Open Street Maps View</Button>
          
</Card.Body>


</Card>
</Col>

 
)
)
 }   
   </Row>

    </React.Fragment>
   )
};

export default MapViewComponent;

/*
<button type="button"
       onClick={(event)=>{event.preventDefault();
       window.location.href='https://www.openstreetmap.org/relation/52939'}}>Testing Phase</button>
*/