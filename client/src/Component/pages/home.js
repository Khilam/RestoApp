

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

     
      <div >

<Navbar/>
               <h1>Mon Resto</h1>
               <div className=" my-para "><p>Menu du jour</p>
               
               </div>
              
              <div  className="maCarte"  >
              {/* <Row  className="  justify-content-md-center" />
               <Col  md={3} className=" col g-3"/> */}
           <div className="d-flex justify-content-between flex-wrap">
              {datas.map((el,key )=> (
                <div  key={key}>
               
                 <Card.Img variant="top" className= "images" src={el.imageUrl}  />
                 <Card.Body>
                 <Card.Title >{el.title}</Card.Title>
                 <Card.Text>
                 {el.description}
                </Card.Text>
                
                <Button href="/product/:id" variant="primary">Commander</Button>
                </Card.Body>
                </div>
             
             ))}
             </div>
             {/* </Card> */}
   
           </div>  
     
             </div>  
 
             )}
  
  export default Home



