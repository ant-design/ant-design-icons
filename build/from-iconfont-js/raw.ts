import fs = require('fs');
import path = require('path');
import { log } from '../utils';

const splitSymbol = '@@space@@';
const header = '<?xml version="1.0" encoding="utf-8"?>';
const svgsXML = fs.readFileSync(path.resolve(__dirname, './svgs.xml'), 'utf8');
const getTokenReg = / id="[^\"]+" /;

const svgs = svgsXML.split(splitSymbol);

function getIdFromSvgAttr(svg: string) {
  const result = getTokenReg.exec(svg);
  if (result) {
    return result[0].replace(/^ id="/, '').replace(/" $/, '');
  }
}

log(`Make Sure that you have created './svg' directory`);
for (const svg of svgs) {
  const id = getIdFromSvgAttr(svg);
  if (typeof id === 'string') {
    log(`Generate SVG: ${id}`);
    const content = header + svg;
    fs.writeFileSync(path.resolve(__dirname, `./svg/${id}.svg`), content, 'utf8');
  }
}
