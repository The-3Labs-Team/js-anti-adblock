# anti-adblock-js
A simple and lightweight script for detect Adblock

# Installation

```batch
npm i js-anti-adblock
```


# Usage

Import this into your app.js, this check if the user have an ad-blocker and will create a pop-up with a message and a logo
```js
import AntiAdBlocker from 'js-anti-adblock/dist/antiAdBlocker.min.ob.js';

const adBlocker = new AntiAdBlocker({color:'red', logo:{url: '/assets/logo.svg', width: '300px', height: '50px'}, hiddenBody: true});
```

or import this for check if the user have an ad-blocker, **don't show a pop-up, but return a bool**
```js
import FindAdBlocker from '/dist/findAdBlocker.min.ob.js';

const adBlocker = new FindAdBlocker();
```
