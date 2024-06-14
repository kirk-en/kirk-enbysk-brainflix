import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import icon from "../../assets/icons/publish.svg";
import "./UploadPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const API = import.meta.env.VITE_API_URL;

const UploadPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Event listeners for each form field
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  // API POST request to "upload" new video
  const uploadVideo = async (obj) => {
    try {
      await axios.post(`${API}/videos?api_key=kirk100`, obj);
      console.log('video uploaded via form!');
    } catch (error) {
      console.log(error);
    }
  };

  // Run when form is submitted
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const uploadObj = {
      title: title,
      description: description,
      image: '/images/upload-image.jpg',
    }
    uploadVideo(uploadObj);
    alert(`Your Video, ${title}, has been uploaded. Congratulations 🎉`);
    navigate("/");
  };

  return (
    <>
      <div className="divide-line"></div>
      <main className="upload">
        <h1 className="main-title upload__title">Upload Video</h1>
        <div className="divide-line divide-line--upload-page"></div>
        <form className="upload__form" onSubmit={handleFormSubmit}>
          <div className="upload__thumbnail-container">
            <p className="upload__subtitle upload__subtitle--top-gap">
              video thumbnail
            </p>
            <img
              src={thumbnail}
              alt="Uploaded video thumbnail"
              className="upload__image"
            />
          </div>
          <div className="upload__text-areas-container">
            <label htmlFor="title">
              <p className="upload__subtitle">title your video</p>
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
              placeholder="Add a title to your video"
              className="text-input-field text-input-field--fixed-small"
              required
            />
            <label htmlFor="description">
              <p className="upload__subtitle">add a video description</p>
            </label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Add a description to your video"
              className="text-input-field text-input-field--multi-line"
              required
            />
          </div>
          <div className="divide-line divide-line--upload-page"></div>
          <div className="upload__buttons-container">
            <button type="submit" className="upload__btn">
              <img
                className="upload__icon"
                src={icon}
                alt="publish video icon"
              />
              <span>publish</span>
            </button>
            <Link to={"/"} className="upload__btn upload__btn--cancel">
              <span>cancel</span>
            </Link>
          </div>
        </form>
      </main>
    </>
  );
};

export default UploadPage;
