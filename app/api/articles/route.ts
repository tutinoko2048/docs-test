import matter from "gray-matter";
import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { ArticleData } from "@/app/types";
import { setTimeout } from "node:timers/promises";

interface Params {
  slug: string;
}

function getArticleData(dirent: fs.Dirent): ArticleData {
  const file = fs.readFileSync(path.join(dirent.path, dirent.name), "utf-8");
  const { data } = matter(file);
  return {
    id: dirent.name.replaceAll('.md', ''),
    title: data.title,
    date: data.date,
    description: data.description
  }
}

export async function GET(request: Request) {
  const articles = fs.readdirSync(path.join(process.cwd(), 'app/articles'), { withFileTypes: true })
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => getArticleData(dirent));

  await setTimeout(500);
  return NextResponse.json(articles);
}