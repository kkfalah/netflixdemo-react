import React from "react";
import "./App.css"
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import RowPost from "./components/rowpost/RowPost";
import {originals, actions, horror, romance, comedy} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Originals' url={originals} />
      <RowPost title='Actions' url={actions} />
      <RowPost title='Comedy' url={comedy} />
      <RowPost title='Romance' url={romance} />
      <RowPost title='Horror' url={horror} />
    </div>
  );
}

export default App;
