import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen, waitFor } from '@testing-library/react'

import Input from "./Input";

describe("Running Test for Demo Input", () => {

  test("Check placeholder in Input", () => {
    render(<Input placeholder="Hello demo" />)
    expect(screen.getByPlaceholderText('Hello demo')).toHaveAttribute('placeholder', 'Hello demo');
  });

  test("renders the Input component", async () => {
    render(<Input placeholder="demo" />);
    const input = screen.getByPlaceholderText("demo") as HTMLInputElement;
    userEvent.type(input, "Hello world!");
    await waitFor(() => expect(input.value).toBe("Hello world!"));
  });
});