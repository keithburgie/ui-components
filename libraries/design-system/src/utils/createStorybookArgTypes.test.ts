import { describe, it, expect } from "vitest";
import { variantsToStorybookArgTypes } from "./createStorybookArgTypes";

describe("variantsToStorybookArgTypes", () => {
  it("generates argTypes with select controls from variant definitions", () => {
    const mockStyles = {
      variants: {
        size: {
          sm: "text-sm",
          md: "text-md",
          lg: "text-lg",
        },
        color: {
          primary: "bg-primary",
          secondary: "bg-secondary",
        },
      },
    };

    const result = variantsToStorybookArgTypes(mockStyles);

    expect(result).toEqual({
      size: {
        control: "select",
        options: ["sm", "md", "lg"],
        table: { defaultValue: { summary: undefined } },
      },
      color: {
        control: "select",
        options: ["primary", "secondary"],
        table: { defaultValue: { summary: undefined } },
      },
    });
  });

  it("handles numeric variant keys", () => {
    const mockStyles = {
      variants: {
        padding: {
          0: "p-0",
          4: "p-4",
          8: "p-8",
        },
      },
    };

    const result = variantsToStorybookArgTypes(mockStyles);

    expect(result).toEqual({
      padding: {
        control: "select",
        options: ["0", "4", "8"],
        table: { defaultValue: { summary: undefined } },
      },
    });
  });

  it("handles a single variant", () => {
    const mockStyles = {
      variants: {
        variant: {
          filled: "bg-filled",
        },
      },
    };

    const result = variantsToStorybookArgTypes(mockStyles);

    expect(result).toEqual({
      variant: {
        control: "select",
        options: ["filled"],
        table: { defaultValue: { summary: undefined } },
      },
    });
  });

  it("includes default values from defaultVariants", () => {
    const mockStyles = {
      variants: {
        size: { sm: "text-sm", md: "text-md" },
      },
      defaultVariants: {
        size: "md",
      },
    };

    const result = variantsToStorybookArgTypes(mockStyles);

    expect(result).toEqual({
      size: {
        control: "select",
        options: ["sm", "md"],
        table: { defaultValue: { summary: "md" } },
      },
    });
  });

  it("handles empty variants object", () => {
    const mockStyles = {
      variants: {},
    };

    const result = variantsToStorybookArgTypes(mockStyles);

    expect(result).toEqual({});
  });
});
