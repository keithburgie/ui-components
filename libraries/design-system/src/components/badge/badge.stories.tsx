import type { Meta, StoryObj } from "@storybook/react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { Badge, badgeStyles } from "./badge";

const meta: Meta<typeof Badge> = {
  title: "Themed/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(badgeStyles),
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Statuses: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    intent: { table: { disable: true } },
  },
  render: ({ size }) => (
    <div className="flex gap-4">
      <Badge intent="info" size={size}>
        For Sale
      </Badge>
      <Badge intent="success" size={size}>
        Active
      </Badge>
      <Badge intent="warning" size={size}>
        Pending
      </Badge>
      <Badge intent="danger" size={size}>
        Sold
      </Badge>
      <Badge intent="neutral" size={size}>
        Draft
      </Badge>
    </div>
  ),
};

export const AssetClass: Story = {
  args: {
    intent: "info",
    size: "md",
  },
  render: ({ intent, size }) => (
    <div className="flex gap-4">
      <Badge intent={intent} size={size}>
        Office
      </Badge>
      <Badge intent={intent} size={size}>
        Retail
      </Badge>
      <Badge intent={intent} size={size}>
        Multi-Family
      </Badge>
    </div>
  ),
};
