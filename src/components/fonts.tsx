import React from 'react';
import { Global } from '@emotion/react';

const Fonts: React.FC = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Montserrat';
        font-style: 'normal';
        font-weight: 400;
        font-display: swap;
        src: url('../fonts/Montserrat-Regular.ttf') format('truetype');
      }
      @font-face {
        font-family: 'ProximaNova';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../fonts/ProximaNova-Regular.woff2') format('woff2'), url('../fonts/ProximaNova-Regular.woff') format('woff');
      }
      @font-face {
        font-family: 'ProximaNova';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('../fonts/ProximaNova-Semibold.woff2') format('woff2'), url('../fonts/ProximaNova-Semibold.woff') format('woff');
      }
      @font-face {
        font-family: 'ProximaNova';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('../fonts/ProximaNova-Bold.woff2') format('woff2'), url('../fonts/ProximaNova-Bold.woff') format('woff');
      }
      @font-face {
        font-family: 'ProximaNova';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('../fonts/ProximaNova-Light.woff2') format('woff2'), url('../fonts/ProximaNova-Light.woff') format('woff');
      }
      @font-face {
        font-family: 'SamuraiBob';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../fonts/CFSamuraiBob-Regular.woff2') format('woff2'), url('../fonts/CFSamuraiBob-Regular.woff') format('woff');
      }
    `}
  />
);

export default Fonts;
