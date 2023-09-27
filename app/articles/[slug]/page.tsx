import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

interface MarkdownData {
  fullPath: string;
  content: string;
  data: Record<string, any>
}

async function getData(articleId: string): Promise<MarkdownData> {
  const fullPath = path.join(process.cwd(), 'app/articles', `${articleId}.md`);
  const file = readFileSync(fullPath, "utf-8");
  const matterResult = matter(file);
  return {
    fullPath,
    content: matterResult.content,
    data: matterResult.data
  }
}

export default async function Article({ params }: { params: { slug: string } }) {
  const markdown = await getData(params.slug);
  //console.log(markdown.data)
  return (
    <ReactMarkdown
      remarkPlugins={[ remarkGfm ]}
      className="markdown"
      components={{ code: CodeBlock }}
    >
      {markdown.content}
    </ReactMarkdown>
  )
}