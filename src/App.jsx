import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import videosData from "./data/video-details.json";

import Header from "./components/Header/Header";

console.log(videosData);

function App() {
  const [video, setVideo] = useState(videosData[0]);

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
