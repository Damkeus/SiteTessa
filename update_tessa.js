const fs = require('fs');
let html = fs.readFileSync('tessa_v2.html', 'utf8');

// 1. Remove autoplay from the video and add an ID
html = html.replace(
    '<video src="WhatsApp Video 2026-02-24 at 21.17.46.mp4" autoplay loop playsinline',
    '<video id="myVideo" src="WhatsApp Video 2026-02-24 at 21.17.46.mp4" loop playsinline'
);

// 2. Add step 7 logic to onStepEnter for playing video/audio
if (html.includes('if (n === 6) initPuzzle();')) {
    if (!html.includes('if (n === 7) document.getElementById(\\\'myVideo\\\').play();')) {
        html = html.replace(
            'if (n === 6) initPuzzle();',
            'if (n === 6) initPuzzle();\n      if (n === 7) document.getElementById(\\\'myVideo\\\').play();'
        );
    }
}

// 3. Cut out the massive PUZZLE_IMGS base64 string
const startTag = 'const PUZZLE_IMGS = [';
const startIndex = html.indexOf(startTag);

if (startIndex !== -1) {
    // Find the closing bracket and semicolon
    const endIndex = html.indexOf('];', startIndex);
    if (endIndex !== -1) {
        // Only replace if it's very long (meaning it contains base64)
        if (endIndex - startIndex > 1000) {
            const newPuzzle = `const PUZZLE_IMGS = [
  'row-1-column-1.jpg',
  'row-1-column-2.jpg',
  'row-2-column-1.jpg',
  'row-2-column-2.jpg'
];`;
            html = html.substring(0, startIndex) + newPuzzle + html.substring(endIndex + 2);
        }
    } else {
        console.log("Could not find end of PUZZLE_IMGS array.");
    }
} else {
    console.log("Could not find PUZZLE_IMGS array start.");
}

fs.writeFileSync('tessa_v2.html', html);
console.log("Update successful!");
