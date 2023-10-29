import { Heading } from "@chakra-ui/react";
import ArticleList from "./components/ArticleList";

export default function Home() {
  return (
    <>
      <Heading as="h1" mb={4}>Articles</Heading>
      <ArticleList />
    </>
  )
}