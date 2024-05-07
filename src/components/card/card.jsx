import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="building-image" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="pin-img" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="bed-img" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="bath-img" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save-img" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="chat-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
