import { headers } from "next/headers"
import { SimpleGrid } from "./chakra-ui";
import { ArticleData } from "../types";
import ArticleCard from "./ArticleCard";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

function getArticleData(dirent: fs.Dirent): ArticleData {
  const file = fs.readFileSync(path.join(dirent.path, dirent.name));
  const { data } = matter(file);
  return {
    id: dirent.name.replaceAll('.md', ''),
    title: data.title,
    date: data.date,
    description: data.description
  }
}

function getArticleList(): ArticleData[] {
  const articles = fs.readdirSync(path.join(process.cwd(), 'app/articles'), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => getArticleData(dirent));
  return articles;
}

export default function ArticleList() {  
  const articles: ArticleData[] = getArticleList();
  
  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2} as="ul">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </SimpleGrid>
  )
}
