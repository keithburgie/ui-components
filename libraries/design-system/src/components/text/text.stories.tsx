import type { Meta, StoryObj } from "@storybook/react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { Text, textStyles } from "./text";

const meta: Meta<typeof Text> = {
  title: "Themed/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(textStyles),
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    size: "base",
    color: "default",
  },
};

export const MutedCaption: Story = {
  args: {
    children: "Last updated: 5 minutes ago",
    size: "sm",
    color: "muted",
  },
};

export const ErrorMessage: Story = {
  args: {
    children: "Failed to save changes.",
    weight: "bold",
    color: "error",
  },
};
