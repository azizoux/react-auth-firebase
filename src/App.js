import React from "react";
import Home from "./Pages/Home";
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import NavBar from './components/NavBar'
import Private from "./Pages/Private/Private";
import PrivateHome from "./Pages/Private/PrivateHome/PrivateHome";

function App() {
  return (
    <>
      <SignUp />
      <SignIn />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/private" element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
