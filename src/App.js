import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Main from "./components/pages/Main";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/health" element={<Main prop="health" />} />
          <Route exact path="/business" element={<Main prop="business" />} />
          <Route exact path="/science" element={<Main prop="science" />} />
          <Route exact path="/sports" element={<Main prop="sports" />} />
          <Route
            exact
            path="/technology"
            element={<Main prop="technology" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<Main prop="entertainment" />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
