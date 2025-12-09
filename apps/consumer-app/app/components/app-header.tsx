"use client";
import { Heading, Link, Flex, Box } from "@ui/design-system/components";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <Box
      as="header"
      className="w-full border-b border-border-default bg-surface-base"
    >
      <Box className="mx-auto px-6 py-2.5">
        <Flex className="items-center justify-between">
          <Heading level={4} className="whitespace-nowrap">
            UI Components Demo
          </Heading>

          {/* Right side: Links and Theme Switcher */}
          <Flex className="items-center gap-2 md:gap-4">
            <Link
              href="https://www.linkedin.com/in/keithburgie/"
              target="_blank"
              rel="noopener noreferrer"
              flush={false}
              className="text-sm md:text-base"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/keithburgie/ui-components"
              target="_blank"
              rel="noopener noreferrer"
              flush={false}
              className="text-sm md:text-base"
            >
              GitHub
            </Link>

            {/* Theme Switcher */}
            <ThemeSwitcher />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
