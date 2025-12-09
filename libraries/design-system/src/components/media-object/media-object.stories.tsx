import type { Meta, StoryObj } from "@storybook/react";
import { MediaObject } from "./media-object";
import { Button } from "@/components/button/button";
import { Badge } from "@/components/badge/badge";
import { Heading } from "@/components/heading/heading";
import { Text } from "@/components/text/text";
import { variantsToStorybookArgTypes } from "@/utils/createStorybookArgTypes";
import { mediaObjectStyles } from "./media-object";

const meta: Meta<typeof MediaObject> = {
  title: "Patterns/MediaObject",
  component: MediaObject,
  tags: ["autodocs"],
  argTypes: variantsToStorybookArgTypes(mediaObjectStyles),
};

export default meta;
type Story = StoryObj<typeof MediaObject>;

export const VerticalCard: Story = {
  args: {
    layout: "vertical",
    className:
      "max-w-xs bg-surface-card border border-border-default rounded-lg shadow-sm overflow-hidden",
  },
  render: (args) => (
    <MediaObject {...args}>
      <MediaObject.Media className="h-40">
        <MediaObject.Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
          alt="Analytics Chart"
        />
      </MediaObject.Media>
      <MediaObject.Content>
        <div className="flex justify-between items-center mb-2">
          <Badge intent="success">Up 12%</Badge>
        </div>
        <Heading level={2}>$1.2M</Heading>
        <Text color="muted" size="sm">
          Total Revenue
        </Text>
      </MediaObject.Content>
    </MediaObject>
  ),
};

export const HorizontalListItem: Story = {
  args: {
    layout: "horizontal",
    mediaWidth: "square",
    align: "center",
    spacing: "sm",
    className:
      "w-full bg-surface-base border border-border-default rounded-md hover:border-border-hover transition-colors",
  },
  render: (args) => (
    <MediaObject {...args}>
      <MediaObject.Media className="w-16 rounded-l-md">
        <MediaObject.Image
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
          alt="Avatar"
        />
      </MediaObject.Media>
      <MediaObject.Content>
        <div className="flex justify-between items-center w-full">
          <div>
            <Heading level={4} className="text-base">
              John Doe
            </Heading>
            <Text size="xs" color="muted">
              Director of Product
            </Text>
          </div>
          <Button variant="ghost" size="sm">
            Message
          </Button>
        </div>
      </MediaObject.Content>
    </MediaObject>
  ),
};

export const NewsFeedItem: Story = {
  args: {
    layout: "responsive",
    mediaWidth: "wide",
    className:
      "max-w-3xl bg-surface-card border-b border-border-muted pb-6 mb-6",
  },
  render: (args) => (
    <MediaObject {...args}>
      <MediaObject.Media className="rounded-lg">
        <MediaObject.Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
          alt="Office"
        />
      </MediaObject.Media>
      <MediaObject.Content>
        <Badge intent="info" className="mb-2 self-start">
          Market Research
        </Badge>
        <Heading
          level={3}
          className="mb-2 text-body-content hover:text-link-hover cursor-pointer transition-colors"
        >
          Q3 Office Market Report: Vacancy Rates Stabilize
        </Heading>
        <Text color="muted" className="line-clamp-2 mb-4">
          Despite economic headwinds, the downtown office market showed signs of
          resilience in the third quarter, with Class A properties leading the
          recovery...
        </Text>
        <div className="flex gap-4 text-xs text-muted-content font-medium">
          <span>Oct 24, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </MediaObject.Content>
    </MediaObject>
  ),
};

export const SidebarStressTest: Story = {
  render: () => (
    <div className="flex gap-8 items-start w-full bg-surface-base p-8">
      <div className="w-[250px] flex flex-col gap-4">
        <p className="text-xs font-bold uppercase text-muted-content">
          Sidebar (250px)
        </p>
        <MediaObject
          layout="responsive"
          className="bg-surface-card shadow-sm rounded-md overflow-hidden"
        >
          <MediaObject.Media>
            <MediaObject.Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
              alt="Sidebar Item"
            />
          </MediaObject.Media>
          <MediaObject.Content>
            <Heading level={4}>Sidebar Item</Heading>
            <Text size="xs" color="muted">
              I adapt to small spaces.
            </Text>
          </MediaObject.Content>
        </MediaObject>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <p className="text-xs font-bold uppercase text-muted-content">
          Main Content (Flex-1)
        </p>
        <MediaObject
          layout="responsive"
          className="bg-surface-card shadow-sm rounded-md overflow-hidden"
        >
          <MediaObject.Media>
            <MediaObject.Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
              alt="Main Content Item"
            />
          </MediaObject.Media>
          <MediaObject.Content>
            <Heading level={3}>Main Content Item</Heading>
            <Text color="muted">
              I automatically switch to a horizontal layout because my container
              gives me enough room (@md).
            </Text>
          </MediaObject.Content>
        </MediaObject>
      </div>
    </div>
  ),
};
