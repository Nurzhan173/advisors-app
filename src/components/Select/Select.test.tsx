import React from "react";
import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import Select from "./Select";

describe("Select test", () => {
  it("should render Select component with label and default option", () => {
    const options = [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
    ];

    const { queryByText } = render(<Select label="Select an option" options={options} onSelect={() => {}} />);

    expect(queryByText("Select an option")).toBeTruthy();
    expect(queryByText("Option 1")).toBeTruthy();
  });
});

