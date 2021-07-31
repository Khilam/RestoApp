import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4003/resto/product" });

//addMenu
function addNewItem(title, price,imageUrl,description ) {
    return Api.post("/add", { title, price,imageUrl,description});
  }

  //getMenu
  function getAllItems() {
    return Api.get("/get");
  }

//deleteMenu
function deleteItems(id) {
  return Api.delete(`/${id}`);
}

//update Menu 

function updateItems(id) {
  return Api.put(`/${id}`);
}





  export {addNewItem, getAllItems, deleteItems,updateItems} 
  export default {addNewItem,getAllItems, deleteItems,updateItems}