"use client";

import React, { FC, ReactNode } from "react";
import type { CodeProps } from "react-markdown/lib/ast-to-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useColorModeValue } from "@chakra-ui/react";
import CopyButton from "./CopyButton";

interface WrapperProps {
  children: ReactNode;
  [prop: string]: any;
}

const CodeBlockWrapper: FC<WrapperProps> = ({ children, ...props }) => (
  <div style={{ position: "relative" }} {...props} >{children}</div>
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
  marginLeft: "-0.2em",
  WebkitUserSelect: "none",
  msUserSelect: "none",
  userSelect: "none"
};

export default function CodeBlock(props: CodeProps) {
  const { inline, className, children } = { ...props };
  const highlightStyle = useColorModeValue(oneLight, nightOwl);
  const [showCopyButton, setShowCopyButton] = React.useState(false);

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
    <CodeBlockWrapper
      onMouseEnter={() => setShowCopyButton(true)}
      onMouseLeave={() => setShowCopyButton(false)}
    >
      {name && <CodeBlockTitle>{name}</CodeBlockTitle>}
      {showCopyButton && <CopyButton value={highlightedCode} />}
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

