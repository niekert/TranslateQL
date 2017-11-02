const spaceFactor = 8;

function computeGoldenRatio(spacingFactor, exp) {
  return Math.round(spacingFactor * 1.618 ** exp);
}

export default {
  breakpoints: {
    maxWidth: '1320px',
  },
  fs: {
    navLink: '16px',
    input: '14px',
    button: '12px',
  },
  color: {
    primary: '#333',
    primaryInactive: 'rgba(51, 51, 51, .7)',
    white: '#FFF',
    outline: '#EAEAEA',
    error: '#CC0000',
  },
  background: {
    primary: 'rgba(0, 0, 0, .02)',
    cta: '#7E53FF',
    tile: '#FFFFFF',
  },
  spacing: {
    0: `${computeGoldenRatio(spaceFactor, 0)}px`, // 8
    1: `${computeGoldenRatio(spaceFactor, 1)}px`, // 13
    2: `${computeGoldenRatio(spaceFactor, 2)}px`, // 21
    3: `${computeGoldenRatio(spaceFactor, 3)}px`, // 34
    4: `${computeGoldenRatio(spaceFactor, 4)}px`, // 55
    5: `${computeGoldenRatio(spaceFactor, 5)}px`, // 89
  },
  shadows: {
    0: '0 1px 2px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.15)',
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
};
