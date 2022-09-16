import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import{Action,Comedy,Originals} from './url'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost  url = {Originals}title='Netflix Originals'/>
      <RowPost  url ={Action}title='Action' isSmall />
      <RowPost  url ={Comedy}title='Comedy' isSmall />
    </div>
  );
}

export default App;
