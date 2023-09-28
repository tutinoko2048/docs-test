"use client";

import { FC, ReactNode } from "react";
import type { CodeProps } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useColorModeValue } from "@chakra-ui/react";

interface WrapperProps {
  children: ReactNode;
}

const CodeBlockWrapper: FC<WrapperProps> = ({ children }) => (
  <div style={{ position: "relative"}}>{children}</div>
);

const CodeBlockTitle: FC<WrapperProps> = ({ children }) => (
  <div
    style={{
      display: "inline-block",
      position: "absolute",
      top: "-0.6em",
      left: "1em",
    }}
    className="code-title"
  >
    {children}
  </div>
);

// unselectable styles
const lineNumberStyle: React.CSSProperties = {
  marginLeft: "-0.4em",
  WebkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none"
};

export default function CodeBlock(props: CodeProps) {
  const { inline, className, children } = { ...props };

  const highlightStyle = useColorModeValue(oneLight, nightOwl);

  if (inline) return <code className={className}>{children}</code>;
  let match = /language-(\w+)(:.+)/.exec(className || "");
  let lang = match && match[1] ? match[1] : "";
  const name = match && match[2] ? match[2].slice(1) : "";
  if (name === "") {
    match = /language-(\w+)/.exec(className || "");
    lang = match && match[1] ? match[1] : "";
  }

  const highlightedCode = String(children).replace(/\n$/, "");
  const showLineNumbers = highlightedCode.split('\n').length - 1 ? true : false;
  
  return (
    <CodeBlockWrapper>
      {name && <CodeBlockTitle>{name}</CodeBlockTitle>}
      <SyntaxHighlighter
        style={highlightStyle}
        language={lang} 
        showLineNumbers={showLineNumbers}
        lineNumberStyle={lineNumberStyle}
      >
        {highlightedCode}
      </SyntaxHighlighter>
    </CodeBlockWrapper>
  );
}

