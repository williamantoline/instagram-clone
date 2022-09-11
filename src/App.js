import React from "react";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";

import "./App.scss";
import LoadingScreen from "./pages/LoadingScreen";
import Home from "pages/Home";
import Header from "components/Header";
import Explore from "pages/Explore";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header location={window.location.pathname} />
        {/* <Router> */}
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="explore" element={<Explore />}></Route>
        </Routes>
        {/* </Router> */}
      </BrowserRouter>
      {/* <LoadingScreen /> */}
      {/* <Home /> */}
      {/* <Explore /> */}
    </>
  );
}

export default App;
