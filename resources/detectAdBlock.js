// adBlockUtils.js
export async function detectAdBlock() {
    let adBlockEnabled = false;
    const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

    try {
        const keywordsToCheck = ['uBlock', 'height:1px!important'];

        const response = await fetch(new Request(googleAdUrl));
        if (!response.headers.get('content-length')) {
            adBlockEnabled = true;
        }

        const responseText = await response.text();
        const adBlockDetected = keywordsToCheck.some(keyword => responseText.includes(keyword));
        if (adBlockDetected) {
            adBlockEnabled = true;
        }
    } catch (e) {
        adBlockEnabled = true;
    } finally {
        console.log(`AdBlock Enabled: ${adBlockEnabled}`);
    }

    return adBlockEnabled;
}
