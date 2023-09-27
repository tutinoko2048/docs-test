"use client";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps, Tooltip, useColorMode } from "@chakra-ui/react";
import React from "react";

export const ColorSwitchButton = (props: IconButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const label = colorMode === "light"
    ? "Switch to darkmode"
    : "Switch to lightmode";
  
  return (
    <Tooltip label={label}>
      <IconButton {...props}
        icon={colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
        onClick={toggleColorMode}
      />
    </Tooltip>
  )
}