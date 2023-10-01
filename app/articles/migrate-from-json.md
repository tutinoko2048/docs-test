---
title: "ScriptAPIを使ったアドオンの作り方"
date: "2023-10-01"
description: "manifestも含めた基本的な作り方を解説します"
---

# ScriptAPIを使ったアドオンの作り方
## manifest.jsonを用意
```json:manifest.json
{
  "format_version": 2,
  "header": {
    "name": "ScriptAPI サンプル",
    "description": "サンプルです。",
    "uuid": "<生成したUUID>",
    "version": [ 1, 0, 0 ],
    "min_engine_version": [ 1, 20, 30 ]
  },
  "modules": [
    {
      "version": [ 1, 0, 0 ],
      "type": "data",
      "uuid": "<生成したUUID>",
      "description": "data module"
    },
    {
      "version": [ 1, 0, 0 ],
      "type": "script",
      "language": "javascript",
      "entry": "scripts/main.js", // 読み込むファイルへのパス
      "uuid": "<生成したUUID>",
      "description": "script module"
    }
  ],
  "dependencies": [ // 使うモジュールを指定する
    {
      "module_name": "@minecraft/server",
      "version": "1.5.0"
    }
  ]
}
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
