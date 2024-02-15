import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import Card from "./Card";
import React from "react";

describe("Card test", () => {
  it("should render Card component with primary Book button", () => {
    const advisor = {
      id: "1",
      name: "John Doe",
      language: "English",
      description: "Test description",
      rating: 4.5,
      reviews: 10,
      avatar: "avatar-url",
      status: "online",
      price: 30,
    };

    const { container } = render(<Card advisor={advisor} />);
    const bookButton = container.querySelector(
      ".card .actions .button.primary"
    );

    expect(bookButton?.textContent).toBe("Book");
  });

  it("should render Card component with secondary Message button", () => {
    const advisor = {
      id: "2",
      name: "Jane Doe",
      language: "French",
      description: "Another test description",
      rating: 4.2,
      reviews: 15,
      avatar: "avatar-url",
      status: "offline",
      price: 25,
    };

    const { container } = render(<Card advisor={advisor} />);
    const messageButton = container.querySelector(
      ".card .actions .button.secondary"
    );

    expect(messageButton?.textContent).toBe("Message");
  });
});
