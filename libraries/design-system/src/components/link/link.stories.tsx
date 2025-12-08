import type { Meta, StoryObj } from "@storybook/react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { buttonStyles } from "@/components/button/button";
import { Link } from "./link";

const meta: Meta<typeof Link> = {
  title: "Themed/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(buttonStyles),
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Read Documentation",
  },
};

export const AsPrimaryButton: Story = {
  args: {
    href: "#register",
    variant: "primary",
    children: "Get Started",
    flush: false,
  },
};

export const External: Story = {
  args: {
    href: "https://google.com",
    target: "_blank",
    children: "Visit External Site",
  },
};
