# anti-adblock-js
A simple and lightweight script for detect Adblock

# Installation

```batch
npm i js-anti-adblock
```


# Usage

Import this into your app.js
```js
import AntiAdBlocker from 'js-anti-adblock/dist/script.min.ob.js';

const adBlocker = new AntiAdBlocker({color:'red', logo:{url: '/assets/logo.svg', width: '300px', height: '50px'}, hiddenBody: true});
```
