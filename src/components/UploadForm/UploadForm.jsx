import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import icon from "../../assets/icons/publish.svg";
import "./UploadForm.scss";

const UploadForm = () => {
  return (
    <section className="upload">
      <h1 className="main-title">Upload Video</h1>
      <span className="upload__subtitle">video thumbnail</span>
      <img src={thumbnail} alt="Uploaded video thumbnail" />
      <form className="upload__form">
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
        <textarea type="text" name="description" placeholder="Add a description to your video" className="text-input-field" required/>
        <button type="submit" className="upload__btn">
          <img className="upload__icon" src={icon} alt="publish video icon" />
          <span>publish</span>
        </button>
      </form>

    </section>
  );
};
export default UploadForm;
