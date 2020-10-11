
import { html } from '@polymer/lit-element';
let cssText = `


      html {
        height: 100%;
        width: 100%;
      }

      body {
        font-family: 'Open Sans', serif;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
      }

      

      .cover {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: auto;
      overflow-y: auto;
      background-color: rgba(244, 244, 244, 1);
      width: 375.00px;
    height: 667.00px;
    left: 0px;
    top: 0px;

}

.cover .logoclinicauniversidaddelasabana250x90 {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      background-image: url("assets/logoclinicauniversidaddelasabana250x90.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: none;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: none;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: none;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: none;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 295.00px;
    height: 106.00px;
    left: 40.00px;
    top: 267.00px;

}

;
`;
cssText = cssText.replace(/background-image: url\(\"assets/g, `background-image: url("${import.meta.url.replace('cover.style.js', 'assets')}`);
cssText = cssText.replace(/src: url\(assets/g, `src: url(${import.meta.url.replace('cover.style.js', 'assets')}`);
export const CoverStyle = html`
${cssText}
`;
