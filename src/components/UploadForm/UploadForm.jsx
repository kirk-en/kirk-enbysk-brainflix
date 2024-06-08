import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import icon from "../../assets/icons/publish.svg";
import "./UploadForm.scss";
import { Link } from "react-router-dom";

const UploadForm = () => {
  return (
    <section className="upload">
      <h1 className="main-title upload__title">Upload Video</h1>
      <div className="divide-line divide-line--upload-page"></div>
      <form className="upload__form">
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
            placeholder="Add a description to your video"
            className="text-input-field text-input-field--multi-line"
            required
          />
        </div>
        <div className="divide-line divide-line--upload-page"></div>
        <div className="upload__buttons-container">
          <button type="submit" className="upload__btn">
            <img className="upload__icon" src={icon} alt="publish video icon" />
            <span>publish</span>
          </button>
          <Link to={"/"} className="upload__btn upload__btn--cancel">
            <span>cancel</span>
          </Link>
        </div>
      </form>
    </section>
  );
};
export default UploadForm;


