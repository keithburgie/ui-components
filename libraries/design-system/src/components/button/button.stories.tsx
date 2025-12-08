import type { Meta, StoryObj } from "@storybook/react";
import { Search, Trash2, Plus, ArrowRight } from "lucide-react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { Button, buttonStyles } from "./button";

const meta: Meta<typeof Button> = {
  title: "Themed/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ...variantsToStorybookArgTypes(buttonStyles),
    iconOnly: { table: { disable: true } },
    flush: {
      control: "select",
      options: [false, true],
      table: {
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: "select",
      options: [false, true],
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Save Changes",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Cancel",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete Asset",
    variant: "destructive",
  },
};

export const AsLinkTag: Story = {
  args: {
    as: "a",
    href: "#",
    variant: "link",
    flush: true,
    children: "View Documentation",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Processing...",
    variant: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    size: "sm",
    shape: "rounded",
  },
  argTypes: {
    variant: { table: { disable: true } },
    shape: { options: ["square", "rounded", "circle"] },
    flush: { table: { disable: true } },
    fullWidth: { table: { disable: true } },
  },
  render: ({ size, shape }) => (
    <div className="flex items-center gap-4">
      <Button
        icon={<Plus />}
        size={size}
        shape={shape}
        aria-label="Add new item"
      />
      <Button
        icon={<Search />}
        variant="ghost"
        size={size}
        shape={shape}
        aria-label="Search"
      />
      <Button
        icon={<Trash2 />}
        variant="destructive"
        size={size}
        shape={shape}
        aria-label="Delete"
      />
    </div>
  ),
};

export const WithIconStart: Story = {
  args: {
    variant: "secondary",
    iconStart: <Search />,
    children: "Search Properties",
  },
};

export const WithIconEnd: Story = {
  args: {
    variant: "primary",
    iconEnd: <ArrowRight />,
    children: "Continue",
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: "secondary",
    iconStart: <Search />,
    iconEnd: <ArrowRight />,
    children: "Search & Go",
  },
};

export const AllSizes: Story = {
  args: {
    variant: "primary",
    shape: "rounded",
  },
  argTypes: {
    size: { table: { disable: true } },
    shape: { options: ["square", "rounded", "pill"] },
    flush: { table: { disable: true } },
    fullWidth: { table: { disable: true } },
  },
  render: ({ variant, shape }) => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
    return (
      <div className="flex flex-col gap-4">
        {sizes.map((size) => (
          <div key={size} className="flex items-center gap-4">
            <span className="w-12 text-sm text-muted-content">{size}</span>
            <Button variant={variant} shape={shape} size={size}>
              {`Button ${size.toUpperCase()}`}
            </Button>
          </div>
        ))}
      </div>
    );
  },
};

export const AllVariants: Story = {
  args: {
    size: "md",
    shape: "rounded",
  },
  argTypes: {
    variant: { table: { disable: true } },
    shape: { options: ["square", "rounded", "pill"] },
    flush: { table: { disable: true } },
    fullWidth: { table: { disable: true } },
  },
  render: ({ size, shape }) => {
    const variants = [
      "primary",
      "secondary",
      "ghost",
      "inverted",
      "link",
      "destructive",
    ] as const;
    return (
      <div className="flex flex-col gap-4">
        {variants.map((variant) => (
          <div key={variant} className="flex items-center gap-4">
            <span className="w-24 text-sm text-muted-content">
              {variant}
            </span>
            <Button variant={variant} size={size} shape={shape}>
              {`${variant.charAt(0).toUpperCase() + variant.slice(1)} Button`}
            </Button>
          </div>
        ))}
      </div>
    );
  },
};

export const AllIconOnlyShapes: Story = {
  args: {
    variant: "primary",
    size: "sm",
  },
  argTypes: {
    shape: { table: { disable: true } },
    flush: { table: { disable: true } },
    fullWidth: { table: { disable: true } },
  },
  render: ({ variant, size }) => {
    const shapes = ["square", "rounded", "circle"] as const;
    return (
      <div className="flex flex-col gap-4">
        {shapes.map((shape) => (
          <div key={shape} className="flex items-center gap-4">
            <span className="w-24 text-sm text-muted-content">{shape}</span>
            <Button
              icon={<Plus />}
              variant={variant}
              size={size}
              shape={shape}
              aria-label={`${shape} icon button`}
            />
          </div>
        ))}
      </div>
    );
  },
};
