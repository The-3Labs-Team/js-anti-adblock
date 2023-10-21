import { detectAdBlock } from '/resources/detectAdBlock.js';

export default class AntiAdBlocker {
  constructor({hiddenBody: hiddenBody}) {

    const config = {
      hiddenBody: hiddenBody ?? true
    }

    const isItalianLanguage = navigator.language === 'it-IT' ? true : false;

    const body = document.querySelector('body')

    window.onload = async () => {
      const adBlockEnabled = await detectAdBlock();

      if (adBlockEnabled) {
        body.setAttribute('aria-hidden', 'true');
        if (config.hiddenBody) {
          body.innerHTML = '';
        }
        showBannerAdBlock();
      }
    };

    function showBannerAdBlock () {
      body.style.overflow = 'hidden'

      body.innerHTML +=
            `
            <div style="${getRandomStyle()};">
            <!-- <div class="style"> -->
                <div style="width: 100%; max-width: 500px; margin: auto; background-color: white; border-radius: 1rem; overflow: hidden; position: relative;">

                <img src="./assets/logo-small.svg" style="position: absolute; top: 0; right: 0; background-color: #D9D9D9; padding: 10px; border-bottom-left-radius: 1rem;">

    
    
                    <!-- Content -->
                    <section id="content">
                      ${getContentFirstPage()}
                    </section>
    
                    <p style="text-align: center; margin: 20px 0; font-size: .9rem;">
                        ${isItalianLanguage ? 'Adblock Detector è un progetto di' : 'Adblock Detector is a  project by' } <a href="https://www.3labs.it" target="_blank" style="font-weight: bold; text-decoration: none; color: black;">3Labs™ Team</a>
                    </p>
    
                    
                    <!-- Buttons -->
    
                    <div style="display: flex; border-top: 1px solid #E5E7EB">
    
                    <span onclick="toggleContent()" id="how-to-remove" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: white; ">
                      ${getHowDisableButton()}
                    </span>
                    <span onclick="location.reload()" style="width: 50%; height: 60px; padding: 10px; text-align: center; display: flex; justify-content: center; align-items:center; cursor: pointer; background-color: black; color: white; font-weight: bold; ">
                      ${isItalianLanguage ? 'Ok, fatto!' : 'Ok, done!'}
                    </span>
    
                    </div>
    
    
                </div>  
            </div>

            <style>
            
            *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
      
            #ad-icon-small{
                    display: none;
                }

            @media screen and (max-width: 500px){
                #ad-icon{
                    display: none;
                }

                #ad-icon-small{
                    display: inline-block;
                }
                
            }
        </style>
    `
      const script = document.createElement('script');
      script.textContent = `
        function toggleContent() {
          const content = document.getElementById('content');
          const button = document.getElementById('how-to-remove');
          if (content.innerHTML.includes('<div id="content-1"')) {
            content.innerHTML = \`${getContentSecondPage()}\`;
            button.innerHTML = \`${getReturnBackButton()}\`;
          } else {
            content.innerHTML = \`${getContentFirstPage()}\`;
            button.innerHTML = \`${getHowDisableButton()}\`;
          }
        }
      `;
      body.appendChild(script);
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
          value: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol'
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


    function getContentFirstPage(){

      return `<div id="content-1" style="display: flex; padding: 30px 10px 10px; min-height: 305px;">
              <div style="margin-left: 10px;">

                  <div style="display:flex; justify-content: space-between;">
                      <p>
                      ${isItalianLanguage ? '<span style="text-transform: uppercase;">Alt!</span> Mi è sembrato di vedere un...' : '<span style="text-transform: uppercase;">Alt!</span> I thought I saw an...' }
                          <br>
                          <span style="font-size: 3rem; font-weight: bold; text-transform: uppercase;">Adblock!</span>
                      </p>
                      <img src="./assets/adIconSmall.png" id="ad-icon-small">
                  </div>

                  

                  <p style="font-size: 1.1rem; color: rgb(107, 114, 128); line-height: 28px; margin: 20px 0;">
                      ${isItalianLanguage ? 'Abbiamo limitato la pubblicità sui nostri siti, ti chiediamo la cortesia di disabilitare l\'AdBlock per continuare a navigare. Grazie!' : 'We have limited advertising on our sites, we ask you to disable AdBlock to continue browsing. Thank you!'}
                  </p>
              </div>
              
              <img src="./assets/adIcon.png" id="ad-icon" style="width: 100%; height: 100%;">
          </div> `;
  }

    function getContentSecondPage(){
      return `<div id="content-2" style="padding: 30px 10px 10px; min-height: 305px">
            <div style="margin-left: 10px;">
                <p style="font-weight: bold; font-size: 1.5rem; margin-bottom: 20px;">
                ${isItalianLanguage ? 'Come disattivare l\'Ad Blocker' : 'How to disable Ad Blocker'}
                </p>

                <ol style="font-size: 1.1rem; color: rgb(107, 114, 128);">
                    <li style="margin: 25px 20px;">
                      ${isItalianLanguage ? '<span style="font-weight: bold;">Clicca sull\'icona dell\'estensione per il blocco annunci</span>. Di solito si trova nell\'angolo in alto a destra dello schermo.' : '<span style="font-weight: bold;">Click on the extension icon for the ad blocker</span>. It is usually located in the top right corner of the screen.'}
                    </li>   
                    <li style="margin: 25px 20px;">
                      ${isItalianLanguage ? 'Segui le istruzioni per <span style="font-weight: bold;">disattivare il blocco annunci</span>.' : 'Follow the instructions to <span style="font-weight: bold;">disable ad blocking</span>.'}
                    </li>
                    <li style="margin: 25px 20px;">
                      ${isItalianLanguage ? 'Aggiorna la pagina cliccando su <span style="font-weight: bold;">"Ok, fatto!"</span>' : 'Refresh the page by clicking on <span style="font-weight: bold;">"Ok, done!"</span>'}
                    </li>
                </ol>

            </div>
        </div>`;
    }

    function getHowDisableButton(){
      return `${isItalianLanguage ? 'Come lo disattivo?' : 'How to disable?'}`;
    }

    function getReturnBackButton(){
      return `${isItalianLanguage ? 'Indietro' : 'Back'}`;
    }

  }
}