import React from 'react'
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "DEMO/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  name: 'I am the primary button',
  render: (args) => <Button data-testId="Button-id" {...args}/>,
};

Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Small.args = {
  ...Primary.args,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: "Large",
};

