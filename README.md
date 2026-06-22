# eslint-presets

Presets of eslint configuration

## How to add to project?

Add it in your `package.json` like

```
"eslint-presets": "github:axules/eslint-presets#master",
```

Use in your `eslint.config.js`:

```js
import { defineConfig } from 'eslint/config';
import {
  jsConfig,
  reactConfig,
} from 'eslint-presets';

export default defineConfig([
  jsConfig,
  reactConfig,
]);
```