import AntiAdBlocker from '/dist/antiAdBlocker.min.ob.js';

const adBlocker = new AntiAdBlocker({hiddenBody: false});

// import FindAdBlocker from '/dist/findAdBlocker.min.ob.js';
//
// const adBlocker = new FindAdBlocker();
// adBlocker.detectAdBlock().then(() => {
//     if(adBlocker.result) {
//         console.log("AdBlocker Enabled");
//     }
//     else {
//         console.log("AdBlocker Disabled");
//     }
// });