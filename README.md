# anti-adblock-js
A simple and lightweight script for detect Adblock

# Installation
Import this CDN in your script:

Minified

```js
https://cdn.jsdelivr.net/gh/The-3Labs-Team/js-anti-adblock@1/dist/script.min.js
```

Minified + Obfuscated

```js
https://cdn.jsdelivr.net/gh/The-3Labs-Team/js-anti-adblock@1/dist/script.min.ob.js
```

# Usage

Import this into your app.js
```js
import AntiAdBlocker from 'js-anti-adblock/dist/script.min.ob.js';

const adBlocker = new AntiAdBlocker({color:'red', logo:{url: '/assets/logo.svg', width: '300px', height: '50px'}, hiddenBody: true});
```
