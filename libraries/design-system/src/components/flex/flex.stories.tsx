import type { Meta, StoryObj } from "@storybook/react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { Flex, flexStyles } from "./flex";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(flexStyles),
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const NavbarPattern: Story = {
  args: {
    as: "nav",
    className:
      "w-full p-4 border rounded bg-surface-card justify-between items-center",
    children: (
      <>
        <span className="font-bold text-lg text-body-content">Logo</span>
        <div className="flex gap-4">
          <a
            href="http://example.com"
            className="text-sm text-link-default underline"
          >
            Link 1
          </a>
          <a
            href="http://example.com"
            className="text-sm text-link-default underline"
          >
            Link 2
          </a>
        </div>
      </>
    ),
  },
};
