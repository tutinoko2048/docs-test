import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Suspense } from "react";
import ArticleList from "./components/ArticleList";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Heading as="h1" mb={4}>Articles</Heading>
      <Suspense fallback={<Loading />}>
        <ArticleList />
      </Suspense><br />
      <p>
        hi!
      </p>
    </>
  )
}