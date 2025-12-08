import * as React from "react";
import { Button, type ButtonProps } from "@/components/button/button";

type LinkProps<T extends React.ElementType = "a"> = ButtonProps<T>;

/**
 * A styled link component that renders as an anchor by default.
 *
 * This component wraps `Button` with `variant="link"` and `flush` defaults,
 * allowing it to sit naturally within a line of text. Any Button prop can
 * be overridden for flexibility (e.g., styling a navigation link as a
 * primary button).
 *
 * @example
 * // Basic external link
 * <Link href="https://example.com" target="_blank">
 *   External Link
 * </Link>
 *
 * @example
 * // With Next.js App Router (pass NextLink as the element)
 * import NextLink from "next/link";
 *
 * <Link as={NextLink} href="/about">
 *   Internal Link
 * </Link>
 *
 * @example
 * // With React Router
 * import { Link as RouterLink } from "react-router-dom";
 *
 * <Link as={RouterLink} to="/about">
 *   Internal Link
 * </Link>
 *
 * @example
 * // Override defaults to render as a button-styled link
 * <Link as={NextLink} href="/signup" variant="primary" flush={false}>
 *   Sign Up
 * </Link>
 */
export const Link = <T extends React.ElementType = "a">(
  props: LinkProps<T>
) => {
  return <Button variant="link" flush {...props} as={props.as ?? "a"} />;
};
