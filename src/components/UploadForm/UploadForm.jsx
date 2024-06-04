import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import icon from "../../assets/icons/publish.svg";
import "./UploadForm.scss";

const UploadForm = () => {
  return (
    <section className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <span className="upload__subtitle">video thumbnail</span>
      <img src={thumbnail} alt="Uploaded video thumbnail" />
      <form className="upload__form">
        <label htmlFor="title" className="upload__field">
          <span className="upload__subtitle">title your video</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="Add a title to your video"
          required
        />
        <label htmlFor="description">
          <span className="upload__subtitle">add a video description</span>
        </label>
        <textarea type="text" name="description" placeholder="Add a description to your video" required/>
        <button type="submit" className="upload__btn">
          <img className="upload__icon" src={icon} alt="publish video icon" />
          <span>publish</span>
        </button>
      </form>
    </section>
  );
};
export default UploadForm;
