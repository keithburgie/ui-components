import { Flex, Text } from "@ui/design-system/components";

export function PropertyDetailCardRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Flex className="justify-between items-center">
      <Text size="sm" color="muted">
        {label}
      </Text>
      <Text size="base" weight="semibold">
        {value}
      </Text>
    </Flex>
  );
}
