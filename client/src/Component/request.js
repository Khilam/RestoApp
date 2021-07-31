import Axios from "axios"

import {
    GET_ITEM_API,
    POST_ITEM_API, 
    PUT_ITEM_API,
    DELETE_ITEM_API
   
} from "./Shared/apiUrl"

export const fetchItem=()=>
Axios.get(GET_ITEM_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)



  export const addItem=()=>
  Axios.post(POST_ITEM_API,{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }).then(res=>res.data)

    export const deleteItem=()=>
    Axios.post(DELETE_ITEM_API,{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }).then(res=>res.data)

      export const updateItem=()=>
      Axios.post(PUT_ITEM_API,{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }).then(res=>res.data)

