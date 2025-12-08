import type { Meta, StoryObj } from "@storybook/react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { Grid, gridStyles } from "./grid";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(gridStyles),
};

export default meta;
type Story = StoryObj<typeof Grid>;

const CardPlaceholder = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className="h-32 p-4 bg-surface-base border rounded flex items-center justify-center font-bold text-body-content"
    {...props}
  >
    {children}
  </div>
);

export const ResponsiveCardGrid: Story = {
  args: {
    className:
      "w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8",
    children: (
      <>
        <CardPlaceholder>1</CardPlaceholder>
        <CardPlaceholder>2</CardPlaceholder>
        <CardPlaceholder>3</CardPlaceholder>
        <CardPlaceholder>4</CardPlaceholder>
      </>
    ),
  },
};
