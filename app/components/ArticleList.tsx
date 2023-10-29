import { SimpleGrid } from "./chakra-ui";
import { ArticleData } from "../types";
import ArticleCard from "./ArticleCard";
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";
import dayjs from 'dayjs';
import isSameOrAfterPlugin from 'dayjs/plugin/isSameOrAfter';

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

function compareDate(article1: ArticleData, article2: ArticleData): number {
  const d1 = dayjs(article1.date);
  const d2 = dayjs(article2.date);
  return d1.isSame(d2) ? 0 : d1.isAfter(d2) ? -1 : 1;
}

function getArticleList(): ArticleData[] {
  const articles = fs.readdirSync(path.join(process.cwd(), 'app/articles'), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => getArticleData(dirent))
    .sort(compareDate)
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
