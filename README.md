# anti-adblock-js
A simple and lightweight script for detect Adblock

# Installation

```batch
npm i js-anti-adblock
```


# Usage

Import this into your app.js, this check if the user have an ad-blocker and will create a pop-up with a message and a logo
```js
import AntiAdBlocker from '/js-anti-adblock/dist/antiAdBlocker.min.ob.js';

const adBlocker = new AntiAdBlocker({hiddenBody: true});
```

or use the CDN ```https://cdn.jsdelivr.net/gh/The-3Labs-Team/js-anti-adblock@main/dist/antiAdBlocker.min.ob.js ```
```js
<script src="https://cdn.jsdelivr.net/gh/The-3Labs-Team/js-anti-adblock@main/dist/antiAdBlocker.min.ob.js"></script>
```
