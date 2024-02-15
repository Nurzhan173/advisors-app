import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import Avatar from "./Avatar";
import React from "react";

describe("Avatar test", () => {
  it("should render Avatar component with online status", () => {
    const src = "avatar-image.jpg";
    const alt = "Online Avatar Alt Text";
    const status = "online";

    const { getByAltText, container } = render(
      <Avatar src={src} alt={alt} status={status} />
    );

    const avatarImage = getByAltText(alt) as HTMLImageElement;
    const onlineStatus = container.getElementsByClassName("online-status")[0];

    expect(avatarImage.src).toContain(src);
    expect(onlineStatus).toBeTruthy();
  });

  it("should render Avatar component without online status", () => {
    const src = "avatar-image.jpg";
    const alt = "Offline Avatar Alt Text";
    const status = "offline";

    const { getByAltText } = render(
      <Avatar src={src} alt={alt} status={status} />
    );

    const avatarImage = getByAltText(alt) as HTMLImageElement;

    expect(avatarImage.src).toContain(src);
  });
});
