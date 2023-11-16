import React from "react";
import './App.css';
import  Header  from "./component/header/Header";
import Home from "./component/home/Home";
import About from './component/about/About'
import Skill from "./component/skill/Skill";
import Contact from "./component/contact/Contact";
import Project from "./component/Project/Project";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>  
      </main>
    </>
  );
}

export default App;
