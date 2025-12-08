"use client";

import { Skeleton, MediaObject, Flex } from "@ui/design-system/components";

export function PropertyCardSkeleton() {
  return (
    <MediaObject
      layout="responsive"
      spacing="md"
      mediaWidth="fill"
      align="stretch"
      className="bg-surface-card shadow-sm rounded-md overflow-hidden relative border transition-colors border-border-default"
    >
      <MediaObject.Media className="relative bg-skeleton-base">
        <Skeleton variant="rectangular" className="absolute inset-0" />
      </MediaObject.Media>
      <MediaObject.Content className="min-w-0 relative">
        <Skeleton variant="rectangular" className="h-6 w-24 mb-2" />
        <Skeleton variant="rectangular" className="h-6 w-3/4 mb-2" />
        <Skeleton variant="text" className="h-4 w-1/2 mb-4" />
        <Flex className="justify-between items-center mt-auto pt-4 border-t border-border-muted">
          <Skeleton variant="text" className="h-4 w-24" />
          <Skeleton variant="text" className="h-6 w-32" />
        </Flex>
      </MediaObject.Content>
    </MediaObject>
  );
}
