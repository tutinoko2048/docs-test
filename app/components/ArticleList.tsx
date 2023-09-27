import { headers } from 'next/headers'
import { SimpleGrid, Flex, VStack, Stack, Grid } from "./chakra-ui";
import { ArticleData } from "../types";
import ArticleCard from "./ArticleCard";

export default async function ArticleList() {
  const headersData = headers();
  const host = headersData.get('host');
  const protocol = headersData.get('x-forwarded-proto') ?? host.startWith('localhost') ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  
  const res = await fetch(`${baseUrl}/api/articles`, {
    cache: "no-store"
  });
  const articles: ArticleData[] = await res.json();
  
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2} as="ul">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </SimpleGrid>
  )
}
