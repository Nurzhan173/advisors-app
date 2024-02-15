import { test, expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import Button from "./Button";
import React from "react";

describe("Button test", () => {
  it("should show button with the secondary variant", () => {
    const { container } = render(<Button variant="secondary">Click me</Button>);

    const button = container.querySelector("button");

    expect(button?.className).toBe("button secondary");
  });

  it("should show button with the primary variant", () => {
    const { container } = render(<Button variant="primary">Click me</Button>);

    const button = container.querySelector("button");

    expect(button?.className).toBe("button primary");
  });
});
