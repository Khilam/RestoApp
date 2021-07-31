import './App.css';
import Home from './Component/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './Component/pages/Admin/dashboard';
import ProductScreen from "./Component/pages/itemDetails";

function App() {
  return (
    <Router>
    <div className="App">

 
   
 
    <Route path="/" exact component={Home}/>
    <Route  path="/admin" ><Dashboard/></Route>
    <Route  path="/product/:id" component={ProductScreen}/>
    </div>
    </Router>
  );
}

export default App;