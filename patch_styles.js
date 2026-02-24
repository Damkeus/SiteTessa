const fs = require('fs');
let html = fs.readFileSync('tessa_v2.html', 'utf8');

// 1. Fix #fail-face CSS
const failFaceOld = `#fail-face {
      display: none;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin: 0 auto 14px;
      overflow: hidden;
      border: 3px solid var(--pink);
      box-shadow: 0 0 24px rgba(255, 107, 157, 0.55);
    }`;
const failFaceNew = `#fail-face {
      display: none;
      position: absolute;
      top: 10px;
      right: 10px;
      width: 100px;
      height: 200px;
      border-radius: 8px;
      overflow: hidden;
      border: 3px solid var(--pink);
      box-shadow: 0 0 24px rgba(255, 107, 157, 0.55);
      z-index: 10;
    }`;
html = html.replace(failFaceOld, failFaceNew);

// 2. Add position:relative to hearts-fail
html = html.replace('<div id="hearts-fail" style="display:none">', '<div id="hearts-fail" style="display:none; position:relative; min-height:300px; padding-top:20px;">');

// 3. Fix #puzzle-grid default CSS
const gridOld1 = `#puzzle-grid {
      display: grid;
      grid-template-columns: repeat(2, 145px);
      grid-template-rows: repeat(2, 105px);`;
const gridNew1 = `#puzzle-grid {
      display: grid;
      grid-template-columns: repeat(2, 120px);
      grid-template-rows: repeat(2, 213px);`;
html = html.replace(gridOld1, gridNew1);

// 4. Fix #puzzle-grid mobile CSS
const gridOld2 = `#puzzle-grid {
        grid-template-columns: repeat(2, 130px);
        grid-template-rows: repeat(2, 94px);
      }`;
const gridNew2 = `#puzzle-grid {
        grid-template-columns: repeat(2, 110px);
        grid-template-rows: repeat(2, 195px);
      }`;
html = html.replace(gridOld2, gridNew2);

// 5. Fix #puzzle-stock img default CSS
const stockImgOld1 = `#puzzle-stock img {
      width: 68px;
      height: 50px;
      object-fit: cover;`;
const stockImgNew1 = `#puzzle-stock img {
      width: 68px;
      height: 120px;
      object-fit: cover;`;
html = html.replace(stockImgOld1, stockImgNew1);

// 6. Fix #puzzle-stock img mobile CSS
const stockImgOld2 = `#puzzle-stock img {
        width: 60px;
        height: 44px;
      }`;
const stockImgNew2 = `#puzzle-stock img {
        width: 60px;
        height: 106px;
      }`;
html = html.replace(stockImgOld2, stockImgNew2);

fs.writeFileSync('tessa_v2.html', html);
console.log('Update successful!');
