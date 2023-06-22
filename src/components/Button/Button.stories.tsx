import React from 'react'
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "DEMO/ButtonComponent",
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
  },
  args: {
    primary: true,
  },
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
  color: "#ffffff"

};

export const Secondary: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
  color: "#1b116e"
},
Secondary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
      { name: 'blue', value: '#00f' },
    ],
  },
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
  ...Primary.args,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args) => (
  <Button data-testId="Button-id" {...args} />
);
Large.args = {
  ...Primary.args,
  size: "large",
  text: "Large",
};