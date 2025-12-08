import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, skeletonStyles } from "./skeleton";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";

const meta: Meta<typeof Skeleton> = {
  title: "Themed/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(skeletonStyles),
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Atoms: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Skeleton variant="circular" className="h-10 w-10" />
        <span className="text-xs text-muted-content">Circular (Avatar)</span>
      </div>
      <div className="flex items-center gap-4">
        <Skeleton variant="rectangular" className="h-16 w-32" />
        <span className="text-xs text-muted-content">Rectangular (Image)</span>
      </div>
      <div className="flex items-center gap-4 w-64">
        <Skeleton variant="text" className="h-4 w-full" />
        <span className="text-xs text-muted-content">Text (Default)</span>
      </div>
    </div>
  ),
};

export const PropertyCardPattern: Story = {
  render: () => (
    <div className="w-[350px] overflow-hidden bg-surface-card border border-border-default rounded-lg shadow-sm">
      <div className="flex flex-col p-6 gap-4">
        {/* Badge */}
        <Skeleton variant="circular" className="h-6 w-24 rounded-full" />

        {/* Title */}
        <Skeleton variant="rectangular" className="h-7 w-3/4" />

        {/* Address */}
        <Skeleton variant="text" className="h-4 w-1/2 mb-4" />

        {/* Footer Row */}
        <div className="flex pt-4 border-t border-border-muted justify-between items-center">
          <Skeleton variant="text" className="h-4 w-16" />
          <Skeleton variant="rectangular" className="h-6 w-32" />
        </div>
      </div>
    </div>
  ),
};

export const DetailPagePattern: Story = {
  parameters: {
    layout: "fullscreen", // Allow it to take up space
  },
  render: () => (
    <div className="p-8 bg-surface-base w-full">
      {/* Back Link */}
      <Skeleton className="h-6 w-32 mb-6" />

      <div className="max-w-4xl mx-auto overflow-hidden bg-surface-card border border-border-default rounded-lg shadow-sm">
        {/* Hero Image */}
        <Skeleton variant="rectangular" className="h-64 w-full rounded-none" />

        <div className="p-8">
          <div className="flex justify-between items-start">
            <div className="w-2/3">
              {/* Title & Address */}
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-6 w-1/2" />
            </div>
            <div className="flex flex-col items-end gap-2">
              {/* Price & Type */}
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>

          <hr className="my-8 border-border-muted" />

          <div className="grid grid-cols-2 gap-8">
            <div>
              <Skeleton className="h-6 w-24 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
            <div>
              <Skeleton className="h-6 w-24 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
