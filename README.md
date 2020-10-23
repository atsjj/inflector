# Inflector

[![build](https://img.shields.io/github/workflow/status/atsjj/inflector/ci)](https://github.com/atsjj/inflector/actions?query=workflow%3Aci)
[![doc](https://img.shields.io/badge/deno-doc-blue)](https://doc.deno.land/https/deno.land/x/inflector/mod.ts)
[![npm](https://img.shields.io/npm/v/@atsjj/inflector)](https://www.npmjs.com/package/@atsjj/inflector)

Inflector is a library that is compatible with ActiveSupport::Inflector. Inflector has first-class
support for Deno and TypeScript, but also ships with support for Node CommonJS and ES Modules.

Inflector is based on the work of [Ember Inflector](https://github.com/emberjs/ember-inflector) and
[Ember.js](https://github.com/emberjs/ember.js).

## Install (Node)

```
npm install --save @atsjj/inflector;
```

## Usage

### Deno

```ts
import { pluralize, singularize } from "https://deno.land/x/inflector/mod.ts";

console.log(pluralize("cat")) // "cats"
console.log(singularize("searches")) // "search"
```

### Browser

```html
<script type="module">
  import { pluralize, singularize } from "https://cdn.skypack.dev/@atsjj/inflector";

  console.log(pluralize("cat")) // "cats"
  console.log(singularize("searches")) // "search"
</script>
```

### Node / ESM

```javascript
import { pluralize, singularize } from "@atsjj/inflector";

console.log(pluralize("cat")) // "cats"
console.log(singularize("searches")) // "search"
```

### Node / CJS

```javascript
const { pluralize, singularize } = require("@atsjj/inflector");

console.log(pluralize("cat")) // "cats"
console.log(singularize("searches")) // "search"
```
