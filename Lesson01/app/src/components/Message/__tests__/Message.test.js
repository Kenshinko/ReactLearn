import React from "react";
import { render, screen } from "@testing-library/react";

import { Message } from "..";

describe("Message tests", () => {
  it("render author & text", () => {
    render(<Message text="test" author="author" date=""/>);

    const author = screen.getByText("author");
    const text = screen.getByText("test");
    expect(author + text).toBeDefined();
  });
});


