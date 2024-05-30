import "./VideoInfo.scss";
import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";

const VideoInfo = () => {
  return (
    <section className="vid-info">
      <h1 className="vid-info__title">Video Title</h1>
      <div className="vid-info__details">
        <article className="vid-info__details-group">
          <span className="vid-info__author">By Insert Name</span>
          <span className="vid-info__subtitle">
            {new Date().toLocaleDateString()}
          </span>
        </article>

        <article className="vid-info__details-group vid-info__details-group--right">
          <div className="vid-info__count-container">
            <img className="vid-info__icon" src={viewsIcon} alt="eye icon" />
            <span className="vid-info__subtitle">980,837</span>
          </div>
          <div className="vid-info__count-container">
            <img className="vid-info__icon" src={likesIcon} alt="heart icon" />
            <span className="vid-info__subtitle">22,479</span>
          </div>
        </article>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        nihil, atque provident iure fugiat officiis quidem nobis fugit ullam
        placeat illo, iusto nulla ratione vero, ut modi? Ad modi consequatur
        facere dolorum delectus odit, iure inventore sit. Vel nulla, ipsam
        architecto corporis excepturi soluta dolorem, deleniti molestiae, totam
        debitis ullam itaque. Unde, veniam! Provident iste aliquid eveniet
        veniam maxime numquam nostrum enim molestias itaque repellendus minima,
        necessitatibus esse harum. Corporis expedita qui reiciendis molestias,
        porro praesentium assumenda illum beatae eaque perspiciatis itaque quas
        nam quae similique sunt id non nesciunt optio hic deleniti delectus
        eveniet aut fugit iusto. Cumque, ullam!
      </p>
    </section>
  );
};

export default VideoInfo;
