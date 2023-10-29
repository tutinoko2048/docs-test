import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";
import { Metadata } from "next";
import { Divider, Link } from '@/app/components/chakra-ui';

export const metadata: Metadata = {
  title: "Article",
  description: "Article."
}
  
interface MarkdownData {
  fullPath: string;
  content: string;
  data: Record<string, any>
}

function getData(articleId: string): MarkdownData {
  const fullPath = path.join(process.cwd(), 'app/articles', `${articleId}.md`);
  const file = readFileSync(fullPath, "utf-8");
  const matterResult = matter(file);
  return {
    fullPath,
    content: matterResult.content,
    data: matterResult.data
  }
}

export default function Article({ params }: { params: { slug: string } }) {
  const markdown = getData(params.slug);

  return (
    <>
      <ReactMarkdown
        remarkPlugins={[ remarkGfm ]}
        className="markdown"
        components={{ code: CodeBlock }}
        skipHtml
      >
        {markdown.content}
      </ReactMarkdown>
      <Divider marginBottom="1em"/>
      <Link
        href={`https://github.com/tutinoko2048/docs-test/blob/main/app/articles/${params.slug}.md`}
      >
        <span className="link">Edit on Github</span>
      </Link>
    </>
  )
}