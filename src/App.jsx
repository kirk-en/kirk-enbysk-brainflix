import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import videosData from "./data/video-details.json";

import Header from "./components/Header/Header";
import VideoPage from "./Pages/VideoPage/VideoPage";
import UploadPage from "./Pages/UploadPage/UploadPage";

// console.log(videosData);

function App() {
  // const [video, setVideo] = useState(videosData[0]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoPage />} />
        <Route path="/:videoId" element={<VideoPage />} />
        <Route path="upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
