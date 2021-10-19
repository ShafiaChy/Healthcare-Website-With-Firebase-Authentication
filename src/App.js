import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Details from './Components/Details/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
//import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div >
      {/* <AuthProvider>  */}
     <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route> 
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute exact path="/details">
          <Details></Details>
        </PrivateRoute >
       <Route exact path="/about">
          <About></About>
        </Route>
         <Route exact path="/login">
         <Login></Login>
        </Route>
        <Route exact path="/register">
         <Register></Register>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route> 
      </Switch>
    </Router> 
    {/* </AuthProvider>  */}
    <Footer></Footer>
      
    </div>
  );
}

export default App;
