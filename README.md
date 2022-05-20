<div align="center">
  <h1>
    <br/>
    <br/>
    🦕
    <br />
    deno-module
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    <br />
    Template project to build a new Deno module</em>
    <br />
    <br />

[![License](https://img.shields.io/badge/-License-red.svg?style=for-the-badge)](https://github.com/nurodev/deno-module)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://doc.deno.land/https://deno.land/x/deno-module/mod.ts)

</sup>
  <br />
  <br />
</div>

## 🚀 Install

To get started you will first need to install [Deno](http://deno.land/). View
their website on [how to install Deno](https://deno.land/#installation)

You can either import the module directly or add it to your `import_map.json`
**(Recommended)**:

```json
{
  "imports": {
    "deno-module/": "https://deno.land/x/deno-module/"
  }
}
```

## 🦄 Usage

```typescript
import { ... } from "deno-module/mod.ts";

// ...
```

## ☁️ Deploying

To set up a automatic publishing of your Deno module, you'll need to set up a
GitHub webhook.

```
https://api.deno.land/webhook/gh/<moduleName>
```

I recommend reading through
[this blog post](https://dev.to/craigmorten/how-to-publish-deno-modules-2cg6)
that outlines each step needed to do this.
