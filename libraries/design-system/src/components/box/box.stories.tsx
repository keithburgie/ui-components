import type { Meta, StoryObj } from "@storybook/react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { Box, boxStyles } from "./box";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(boxStyles),
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "I am a basic Box (div)",
    className: "p-4 bg-surface-base text-body-content border rounded shadow-sm",
  },
};

export const AsButton: Story = {
  args: {
    as: "button",
    onClick: () => alert("Clicked!"),
    children: "I am a Button (as='button')",
    className:
      "px-4 py-2 bg-primary text-primary-content rounded hover:bg-primary-hover",
  },
};

export const AsLink: Story = {
  args: {
    as: "a",
    href: "#",
    children: "I am an Anchor (as='a')",
    className: "text-link-default underline",
  },
};
