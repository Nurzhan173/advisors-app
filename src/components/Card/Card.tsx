import React from "react";
import { observer } from "mobx-react-lite";
import { Advisor } from "../../stores/AdvisorsStore";
import "./Card.css";
import { StarIcon } from "../../components/Icons/StarIcon";
import useMobile from "../../hooks/useMobile";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import { LanguageIcon } from "../../components/Icons/LanguageIcon";
import { PriceIcon } from "../../components/Icons/PriceIcon";

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
          <div className="lang">
            <LanguageIcon width={30} height={30} /> {advisor.language}
          </div>
          <div className="price">
            <PriceIcon width={25} height={25} /> {advisor.price}$
          </div>
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
