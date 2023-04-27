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
[![Build](https://img.shields.io/github/workflow/status/nurodev/deno-module/CI?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/NuroDev/deno-module/actions/workflows/ci.yml)
[![Docs](https://img.shields.io/badge/-Docs-blue.svg?style=for-the-badge)](https://doc.deno.land/https://deno.land/x/deno-module/mod.ts)

</sup>
  <br />
  <br />
</div>

## 🚀 Install

To get started you will first need to install [Deno](http://deno.land/). View
their website on [how to install Deno](https://deno.land/#installation)

You can either import the module directly via an `import` or add it to your import map, preferraly inside of your `deno.json`
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
