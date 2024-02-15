import React, { FC } from "react";
import "./Avatar.css";

interface AvatarProps {
  src: string;
  alt: string;
  status: string;
}

const Avatar: FC<AvatarProps> = ({ src, alt, status }) => {
  return (
    <div
      className={`avatar-container ${status === "online" ? "online" : ""}`}
      data-testid="online-status"
    >
      <img src={src} alt={alt} className="avatar" />
      {status === "online" && <div className="online-status"></div>}
    </div>
  );
};

export default Avatar;
