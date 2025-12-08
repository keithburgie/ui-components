import type { Meta, StoryObj } from "@storybook/react";
import { Surface, surfaceStyles } from "./surface";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";

const meta: Meta<typeof Surface> = {
  title: "Themed/Surface",
  component: Surface,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(surfaceStyles),
  parameters: {
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof Surface>;

export const Card: Story = {
  args: {
    variant: "filled",
    elevation: "md",
    children: "I am a basic card surface.",
  },
};

export const SidebarPanel: Story = {
  args: {
    variant: "ghost",
    elevation: "none",
    className: "h-32",
    children: "I use --color-surface-base (slightly off-white/grey).",
  },
};
