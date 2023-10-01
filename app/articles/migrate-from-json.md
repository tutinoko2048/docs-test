---
title: "ScriptAPIを使ったアドオンの作り方"
date: "2023-10-01"
description: "manifestも含めた基本的な作り方を解説します"
---

# ScriptAPIを使ったアドオンの作り方
## manifest.jsonを用意
```json:manifest.json
{}
```

## コードを書く
`@minecraft/server 1.5.0`以上で動きます
```js:scripts/index.js
import { world } from "@minecraft/server"; 

world.afterEvents.itemUse.subscribe(event => {
  const { itemStack, source } = event;
  
  if (itemStack.typeId === "minecraft:stick") {
    source.runCommand("give @s diamond");
  }
  
  if (itemStack.typeId === "minecraft:iron_sword") {
    source.runCommand("effect @s speed 120 1 true");
  }
});
``` 
