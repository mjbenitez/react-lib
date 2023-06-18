import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import Button from "./Button";

describe("Running Test for Marbella Button", () => {

    test("Check Button Primary", () => {
        render(<Button text="Button component primary" primary/>)
        expect(screen.getByRole('button',{name:"Button component primary"})).toBeEnabled();
    });

    test("Check Button Disabled", () => {
        render(<Button text="Button component" disabled/>)
        expect(screen.getByRole('button',{name:"Button component"})).toBeDisabled();
    });
});