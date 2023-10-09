"use client";

import { CopyIcon } from "@chakra-ui/icons";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const copyButtonStyles: React.CSSProperties = {
  position: "absolute",
  cursor: "pointer",
  color: "9ca3af",
  top: "10px",
  right: "16px",
};

const baseToolTipStyles: React.CSSProperties = {
  cursor: "default",
  position: "absolute",
  top: "0px",
  right: "26px",
  padding: "0px 3px",
  display: "inline-block",
  whiteSpace: "nowrap",
  background: "#374151",
  color: "#f9fafb",
  borderRadius: "3px",
  transition: "0.3s ease-in",
}

interface Props {
  value: string;
}

export default function CopyButton(props: Props) {
  const [styleTooltip, setStyleTooltip] = React.useState({
    opacity: "0",
    visiblity: "hidden",
  });

  const handleClick = () => {
    setStyleTooltip({ opacity: "1", visiblity: "visible" });
    setTimeout(() => {
      setStyleTooltip({ opacity: "0", visiblity: "hidden" });
    }, 3000);
  };
  return (
    <div style={copyButtonStyles}>
      <CopyToClipboard text={props.value} onCopy={handleClick}>
        {<CopyIcon/>}
      </CopyToClipboard>
      <div style={{ ...baseToolTipStyles, ...styleTooltip }}>
        Copied!
      </div>
    </div>
  );
}
