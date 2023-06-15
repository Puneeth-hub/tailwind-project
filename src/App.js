import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from './components/Food'
import Category from "./components/Category";
import Copyright from "./components/Copyright";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
      <Category/>
      <Copyright/>
    </div>
  );
}

export default App;
