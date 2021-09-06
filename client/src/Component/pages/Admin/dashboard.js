import React from 'react'
import {useEffect} from "react"
//import {getItemAPI,deleteItem} from "../../../redux/actions/menu"
import UpdateItem from './updateItem'
import {useSelector,useDispatch} from 'react-redux'
import {getItemAPI, deleteItem} from "../../Action/item"
import { Link } from 'react-router-dom'
import AddItem from './addItem'
import { Card, Row, Col } from 'react-bootstrap'
import Navbar from '../navbar'
import "./dashboard.css"


const Dashboard = () => {
const datas = useSelector(state => state.itemReducer.datas)
const loading = useSelector(state => state.itemReducer.loading)

const dispatch = useDispatch()
//get item
  useEffect(() => {
  dispatch(getItemAPI())
     }, [dispatch])
  console.log("my data",datas)
  //delete item

 
   const deleteItemm =(id)=>{
    dispatch (deleteItem(id) )
    console.log(deleteItem(id))
  }
  return(
    <div className="product" >
      <Navbar/>
      {/* <Link to="/">Back</Link> */}
      <AddItem/>
      
      {loading? "loading...." :
      datas.length===0 ? <div > Aucune publication disponible actuellement</div>:
      <div >
              <div className="d-flex justify-content-between flex-wrap">
            {datas.map((el,key )=> (
            
              <div className="crati" key={key}>
              <Card.Img variant="top" className="image" src={el.imageUrl} />
              <Card.Body>
              <Card.Title className="info__name">{el.title}</Card.Title>
              {/* <p className="info__price">${price}</p> */}
             <Card.Text className="text-wrap">
             {el.description}
            </Card.Text>
            <button className="btn btn-danger mt-5 h-25" onClick={() => deleteItemm(el._id)}>supprimer</button>
                <UpdateItem id={el._id}  el={el}/>
           
          </Card.Body>
          </div>
            ))}
     </div>

          </div> 
} 
     </div> 
             

   )}

export default Dashboard