import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import { Link } from "react-router-dom";

const UploadPage = () => {
  return (
    <>
      <div className="divide-line"></div>
      <UploadForm />
    </>
  );
};

export default UploadPage;
