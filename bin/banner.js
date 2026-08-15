'use strict';

// The Morphism CLI banner — ANSI Shadow wordmark in a chrome gradient,
// matching the liquid-metal logotype in assets/the-morphism-logo.png.
// Same recipe as the Hermes Agent startup banner (figlet "ANSI Shadow" +
// per-line ANSI truecolor), recolored silver-on-black for the brand.

const BANNER_LINES = [
  '████████╗██╗  ██╗███████╗    ███╗   ███╗ ██████╗ ██████╗ ██████╗ ██╗  ██╗██╗███████╗███╗   ███╗',
  '╚══██╔══╝██║  ██║██╔════╝    ████╗ ████║██╔═══██╗██╔══██╗██╔══██╗██║  ██║██║██╔════╝████╗ ████║',
  '   ██║   ███████║█████╗      ██╔████╔██║██║   ██║██████╔╝██████╔╝███████║██║███████╗██╔████╔██║',
  '   ██║   ██╔══██║██╔══╝      ██║╚██╔╝██║██║   ██║██╔══██╗██╔═══╝ ██╔══██║██║╚════██║██║╚██╔╝██║',
  '   ██║   ██║  ██║███████╗    ██║ ╚═╝ ██║╚██████╔╝██║  ██║██║     ██║  ██║██║███████║██║ ╚═╝ ██║',
  '   ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝     ╚═╝',
  '',
  '   SIX STYLES · ONE PAGE · ZERO SLOP',
];

// Chrome gradient, top highlight to bottom reflection
const CHROME = [
  [255, 255, 255],
  [232, 232, 232],
  [200, 200, 200],
  [156, 156, 156],
  [115, 115, 115],
  [143, 143, 143],
];
const TAGLINE_RGB = [130, 130, 130];

function colorLine(line, rgb, bold) {
  return `\x1b[${bold ? '1;' : ''}38;2;${rgb[0]};${rgb[1]};${rgb[2]}m${line}\x1b[0m`;
}

function printBanner() {
  const useColor = process.stdout.isTTY && !process.env.NO_COLOR;
  BANNER_LINES.forEach((line, i) => {
    if (!useColor) {
      console.log(line);
    } else if (i < 6) {
      console.log(colorLine(line, CHROME[i], true));
    } else if (line) {
      console.log(colorLine(line, TAGLINE_RGB, false));
    } else {
      console.log('');
    }
  });
  console.log('');
}

module.exports = { printBanner, BANNER_LINES };
