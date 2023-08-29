export default class AntiAdBlocker {
  constructor({color: color, logo:{url: url, width: width, heigth: heigth}, hiddenBody: hiddenBody}) {

    const config = {
      color: color,
      logo: {
        url: url ?? './assets/logo.svg',
        width: width ?? '300px',
        height: heigth ?? '50px'
      },
      hiddenBody: hiddenBody ?? true
    }

    const body = document.querySelector('body')

    window.onload = detectAdBlock();

    async function detectAdBlock () {
      let adBlockEnabled = false
      const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      try {
        const keywordsToCheck = ['uBlock', 'height:1px!important']

        const response = await fetch(new Request(googleAdUrl))
        if (!response.headers.get('content-length')) {
          adBlockEnabled = true
        }

        const responseText = await response.text()
        const adBlockDetected = keywordsToCheck.some(keyword => responseText.includes(keyword))
        if (adBlockDetected) {
          adBlockEnabled = true
        }
      } catch (e) {
        adBlockEnabled = true
      } finally {
        console.log(`AdBlock Enabled: ${adBlockEnabled}`)
      }

      if (adBlockEnabled) {
        body.setAttribute('aria-hidden', 'true')
        if (config.hiddenBody) {
          body.innerHTML = ''
        }
        showBannerAdBlock()
      }
    }

    function showBannerAdBlock () {
      body.style.overflow = 'hidden'

      body.innerHTML +=
            `
            <div style="${getRandomStyle()};">
                <div style="width: 100%; max-width: 900px; margin: auto; background-color: white; border-radius: 1rem; padding-top: 50px; overflow: hidden">
                    <!--Header-->
                    <div style="text-align: center">
                        <img src="${config.logo.url}" alt="Logo" 
                            style="width:${config.logo.width}; height: ${config.logo.height}; margin: auto; object-fit: contain;
                        ">
                        <p style="font-size: 1.1rem; margin: 10px 0; padding: 0 20px;">Abbiamo notato che stai usando uno strumento che blocca gli annunci pubblicitari</p>
                    </div>
                    
                    <!--Main-->
                    <div style="text-align: center; margin: 40px 0; padding: 20px 0; background-color: #f6f6f6;">
                        <h1 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 15px;">Disattiva l'Ad Blocker <br> e naviga gratuitamente</h1>
                        <button onclick="location.reload()" 
                        style="background-color: ${config.color}; border: none; color: white; padding: 15px 35px; font-size: 1.3rem; border-radius: 5rem; cursor: pointer; font-weight: bold;">
                            Aggiorna pagina
                        </button>
                        <p style="font-size: .75rem; font-weight: lighter; margin: 5px 0 0;">Dopo aver disattivato l'Ad Block</p>
                    </div>      
                    
                    <!--Footer-->
                    <div style="padding: 0px 30px 30px 30px;">
                        <h2 style="font-weight: normal; font-size: 1.5rem">Come disattivare l'Ad Blocker</h2>
                        <ul style="margin-left: 40px">
                            <li style="margin: 15px 0">
                                <span style="font-weight: bold">Fai clic sull'icona dell'estensione per il blocco annunci</span> installata sul tuo browser. In genere l'icona si trova nell'angolo in alto a destra dello schermo. Potrebbero essere installati più blocchi annunci. 
                            </li>
                            <li style="margin: 15px 0">
                                <span style="font-weight: bold">Segui le istruzioni per disattivare il blocco annunci</span> sul sito. Potresti dover selezionare un'opzione del menu o fare clic su un pulsante.
                            </li>
                            <li style="margin: 15px 0">
                                <span style="font-weight: bold">Aggiorna la pagina</span> seguendo le istruzioni o facendo clic sul pulsante "Aggiorna" o "Ricarica" del browser. 
                            </li>   
                        </ul>
                    </div>
                    
                </div>  
            </div>
    `
    }

    function getRandomStyle () {
      const styles = [
        {
          name: 'width',
          value: '100%'
        },
        {
          name: 'height',
          value: '100vh'
        },
        {
          name: 'padding',
          value: '10px'
        },
        {
          name: 'background-color',
          value: 'rgba(0,0,0,0.68)'
        },
        {
          name: 'position',
          value: 'fixed'
        },
        {
          name: 'top',
          value: '0'
        },
        {
          name: 'left',
          value: '0'
        },
        {
          name: 'z-index',
          value: '999999'
        },
        {
          name: 'display',
          value: 'flex'
        },
        {
          name: 'font-family',
          value: 'Sans-serif'
        },
        {
          name: 'backdrop-filter',
          value: 'blur(5px)'
        }
      ]

      const randomStyle = Array.from({ length: styles.length }, (_, index) => index)
        .sort(() => Math.random() - 0.5)

      return randomStyle.map(index => `${styles[index].name}: ${styles[index].value};`).join(' ')
    }
  }
}
