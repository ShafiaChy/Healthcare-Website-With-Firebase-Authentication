// import {  getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/firebase.init';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

initializeAuthentication();
// const provider = new GoogleAuthProvider();
function App() {

//  const handleGoogleSignIn = () => {
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//       })
//  }
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route> 
        <Route exact path="/home">
          <Home></Home>
        </Route>
        {/* <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/services">
          <Services></Services>
        </Route>
        <Route exact path="/teach">
         <TeacherOnStudyBuddies></TeacherOnStudyBuddies>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route> */} 
      </Switch>
    </Router> 
      {/* <button onClick={handleGoogleSignIn}> Sign In With Google</button> */}
    </div>
  );
}

export default App;
