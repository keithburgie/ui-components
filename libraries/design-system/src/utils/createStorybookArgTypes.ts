/**
 * Generates Storybook argTypes from a tailwind-variants styles object.
 *
 * This utility automatically creates select controls for all variants
 * defined in a tailwind-variants style configuration.
 *
 * @example
 * ```ts
 * import { surfaceStyles } from "./surface";
 * import { variantsToStorybookArgTypes } from "@/utils/createArgTypes";
 *
 * const meta = {
 *   argTypes: variantsToStorybookArgTypes(surfaceStyles),
 * };
 * ```
 */
export function variantsToStorybookArgTypes<
  T extends {
    variants: Record<string, Record<string, unknown>>;
    defaultVariants?: Record<string, unknown>;
  },
>(styles: T) {
  return Object.fromEntries(
    Object.entries(styles.variants).map(([variantName, variantOptions]) => {
      const rawDefault = styles.defaultVariants?.[variantName];
      const defaultValue =
        rawDefault !== undefined ? String(rawDefault) : undefined;
      return [
        variantName,
        {
          control: "select" as const,
          options: Object.keys(variantOptions),
          table: {
            defaultValue: { summary: defaultValue },
          },
        },
      ];
    })
  );
}
