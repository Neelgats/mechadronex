import React from "react";
import Header from "./header";
import Footer from "./footer";
import About from "./About";
import News from "./News";
import Member from "./Members";


function App(){
  return(
    <div className="App">
      <Header/>
      <About/>
      <Member />
      <News/>
      <Footer/>
    </div>
  );
}

export default App;