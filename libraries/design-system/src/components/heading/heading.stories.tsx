import type { Meta, StoryObj } from "@storybook/react";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { Heading, headingStyles } from "./heading";

const meta: Meta<typeof Heading> = {
  title: "Themed/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(headingStyles),
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "The Quick Brown Fox",
    level: 1,
  },
};

export const AllLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading level={1}>Heading 1 (4xl)</Heading>
      <Heading level={2}>Heading 2 (3xl)</Heading>
      <Heading level={3}>Heading 3 (2xl)</Heading>
      <Heading level={4}>Heading 4 (xl)</Heading>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "The `level` prop automatically renders the correct semantic HTML tag. No need to specify `as` unless you want to override.",
      },
    },
  },
};

export const AutomaticSemanticMapping: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-muted-content mb-2">
          <code>{"<Heading level={1}>...</Heading>"}</code> → Renders as{" "}
          <code>&lt;h1&gt;</code>
        </p>
        <Heading level={1}>Automatically an H1</Heading>
      </div>
      <div>
        <p className="text-sm text-muted-content mb-2">
          <code>{"<Heading level={3}>...</Heading>"}</code> → Renders as{" "}
          <code>&lt;h3&gt;</code>
        </p>
        <Heading level={3}>Automatically an H3</Heading>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "The component automatically maps `level` to the correct semantic HTML tag. Inspect the DOM to see `<h1>`, `<h3>`, etc.",
      },
    },
  },
};

export const DecouplingStyleFromSemantics: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-muted-content mb-2">
          Use case: Semantically an H1, but needs to look smaller
        </p>
        <Heading level={2} as="h1">
          Smaller Page Title (H1 styled as H2)
        </Heading>
      </div>
      <div>
        <p className="text-sm text-muted-content mb-2">
          Use case: Needs heading styles but not semantic meaning
        </p>
        <Heading level={3} as="p">
          Large Body Text (P styled as H3)
        </Heading>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Only use the `as` prop when you need to decouple visual appearance from semantic HTML structure. This is rare but useful for accessibility or SEO requirements.",
      },
    },
  },
};
