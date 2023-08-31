import AntiAdBlocker from '/dist/antiAdBlocker.min.ob.js';

const adBlocker = new AntiAdBlocker({color:'red', logo:{width: '300px', height: '50px'}, hiddenBody: true});


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