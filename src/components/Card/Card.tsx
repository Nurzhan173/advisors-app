import React from "react";
import { observer } from "mobx-react-lite";
import { Advisor } from "../../stores/AdvisorsStore";
import "./Card.css";
import { StarIcon } from "../../components/Icons/StarIcon";
import useMobile from "../../hooks/useMobile";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";

interface Card {
  advisor: Advisor;
}

const Card: React.FC<Card> = observer(({ advisor }) => {
  const isMobile = useMobile();

  return (
    <div className="card">
      <div className="image-wrapper">
        <Avatar src={advisor.avatar} alt="avatar" status={advisor.status} />
      </div>
      <div className="info">
        <div className="description-section">
          {!isMobile && <h3>{advisor.name}</h3>}
          <p>Language: {advisor.language}</p>
          <p>{advisor.description}</p>
        </div>
        <div className="reviews-section">
          <div className="feedbacks">
            {isMobile && <h3>{advisor.name}</h3>}
            <div className="rating">
              <StarIcon width={30} height={30} />
              <span>{advisor.rating}</span>
            </div>
            <span className="reviews"> Reviews: {advisor.reviews}</span>
          </div>
          <div className="actions">
            <Button variant="primary">Book</Button>
            <Button variant="secondary">Message</Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
