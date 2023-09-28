import { Container } from "./chakra-ui";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <Container
      as="main"
      maxW="container.lg"
      my="4"
      minH="calc(90vh - 115px - 2rem)"
    >
      {children}
    </Container>
  );
}