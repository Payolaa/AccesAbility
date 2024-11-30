import React from "react";
import { Routes, Route } from "react-router-dom";
import { PointsProvider } from "./Components/Games/PointsContext";
import Games from './Components/Games/Games';
import Home from './Components/Home/Home'; 
import LoginRegister from './Components/Login/Login';
import AppNavbar from './Components/Navbar/navbar';
import Physical from './Components/Home/Physical';
import Cognitive from './Components/Home/Cognitive';
import Visual from './Components/Home/Visual';
import Team from './Components/Home/Team';
import FAQs from './Components/Home/FAQs';
import Contact from './Components/Home/Contact';
import About from './Components/Home/About';
import Cta from './Components/Home/Cta';
import Cogcw from './Components/Games/Cogcw';
import Phycw from './Components/Games/Phycw';
import Viscw from './Components/Games/Viscw';
import Scoreb from './Components/Scoreboard/scoreb';
import WordleGame from './Components/Games/Wordle';

function App() {
  return (
    <>
      <AppNavbar />
      <PointsProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/navbar" element={<AppNavbar />} />
          <Route path="/physical" element={<Physical />} />
          <Route path="/cognitive" element={<Cognitive />} />
          <Route path="/visual" element={<Visual />} />
          <Route path="/team" element={<Team />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cta" element={<Cta />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Cogcw" element={<Cogcw />} />
          <Route path="/Phycw" element={<Phycw />} />
          <Route path="/Viscw" element={<Viscw />} />
          <Route path="/Scoreb" element={<Scoreb />} />
         
          <Route path="/wordle-cognitive" element={<WordleGame type="Cognitive" solution="SOCIAL" />} />
          <Route path="/wordle-physical" element={<WordleGame type="Physical" solution="PHYSICAL" />} />
          <Route path="/wordle-visual" element={<WordleGame type="Visual" solution="BLIND" />} />
        </Routes>
      </PointsProvider>
    </>
  );
}

export default App;
