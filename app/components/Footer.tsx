"use client";

import { Container, Box, Text, useColorModeValue } from "./chakra-ui";

export default function Footer() {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box 
      as="footer" 
      borderTop={2}
      borderColor={borderColor}
      className="footer"
    >
      <Container maxW="5xl" py={4} borderTop={2} borderColor={borderColor} centerContent>
        <Text as="small">© 2023 RetoRuto9900K</Text>
      </Container>
    </Box>
  );
}