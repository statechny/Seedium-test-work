import ProximaBoldWoff from './ProximaNova-Bold.woff';
import ProximaBoldWoff2 from './ProximaNova-Bold.woff2';
import ProximaRegularWoff from './ProximaNova-Regular.woff';
import ProximaRegularWoff2 from './ProximaNova-Regular.woff2';
import ProximaSemiboldWoff from './ProximaNova-Semibold.woff';
import ProximaSemiboldWoff2 from './ProximaNova-Semibold.woff2';

export default `
  @font-face {
  font-family: 'Proxima Nova';
  src: local('Proxima Nova Semibold'), local('ProximaNova-Semibold'),
      url(${ProximaSemiboldWoff2}) format('woff2'),
      url(${ProximaSemiboldWoff}) format('woff');
  font-weight: 600;
  font-style: normal;
}

@font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova Bold'), local('ProximaNova-Bold'),
        url(${ProximaBoldWoff2}) format('woff2'),
        url(${ProximaBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova Regular'), local('ProximaNova-Regular'),
        url(${ProximaRegularWoff2}) format('woff2'),
        url(${ProximaRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
}
`;
