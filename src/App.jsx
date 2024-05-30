import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Video from './components/Video/Video';
import VideoInfo from "./components/Video-info/VideoInfo";

function App() {
  return (
    <>
      <Header />
      <Video />
<VideoInfo />
    </>
  );
}

export default App;
