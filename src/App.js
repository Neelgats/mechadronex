import React from "react";
import Header from "./header";
import Footer from "./footer";
import About from "./About";
import News from "./News";
import Member from "./Members";
import Contact from "./contact";
import Location from "./location";
import Gallery from "./Gallery";


function App(){
  return(
    <div className="App">
      <Header/>
      <main>
        <About/>
        <Member />
        <Gallery/>
        <News/>
        <Location/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;