import './App.css';
import Home from './Component/pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './Component/pages/Admin/dashboard.js'
import cartScreen from "./Component/pages/itemDetails";
import ProductScreen from './Component/pages/productScreen';
// import Principal from './Component/pages/ScreenPrincipal/principal';


function App() {
  return (
    <Router>
    <div className="App">

 
    {/* <Route path="/" exact component={Principal}/>  */}
 
    <Route path="/" exact component={Home}/>
    <Route  path="/admin" ><Dashboard/></Route>
    <Route  path="/panier" component={cartScreen}/>
    <Route exact path="/product/:id" component={ProductScreen} />
    </div>
    </Router>
  );
}

export default App;