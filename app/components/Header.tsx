"use client";

import { ColorSwitchButton } from "./ColorSwitchButton";
import { Box, Flex, Heading, useColorModeValue, Link } from "./chakra-ui";

export default function Header() {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box as="header">
      <Flex
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={2}
        borderStyle="solid"
        borderColor={borderColor}
        align="center"
        className="header"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="lg">
            <Link href="/">docs-test</Link>
          </Heading>
          <ColorSwitchButton aria-label="Toggle mode" />
        </Flex>
      </Flex>
    </Box>
  );
}