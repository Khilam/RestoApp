

import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getItemAPI} from "../Action/item"
import { Card, Button, Row, Col } from 'react-bootstrap'
import Navbar from './navbar'
import "./home.css"

const Home = () => {
  const datas = useSelector(state => state.itemReducer.datas)
  const loading = useSelector(state => state.itemReducer.loading)
  
  const dispatch = useDispatch()
  
    useEffect(() => {
    dispatch(getItemAPI())
       }, [dispatch])
    console.log("my data",datas)
    return(

     
      <div>

<Navbar/>
               <h1>Mon Resto</h1>
               <div className=" my-para "><p>Menu du jour</p>
               
               </div>
              
              <div className="d-flex justify-content-around cards" >
              <Row  className="  justify-content-md-center" />
               <Col  md={6} className=" col g-6"/>
           
              {datas.map((el,key )=> (
                <div  className="cards" key={key}>
               
                 <Card.Img variant="top" src={el.imageUrl}  />
                 <Card.Body>
                 <Card.Title>{el.title}</Card.Title>
                 <Card.Text>
                 {el.description}
                </Card.Text>
                
                <Button href="/product" variant="primary">Commander</Button>
                </Card.Body>
                </div>
             
             ))}
             {/* </Card> */}
   
           </div>  
     
             </div>  
 
             )}
  
  export default Home