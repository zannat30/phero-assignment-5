// Array of eye-soothing colors
const colors = [
    '#8FB8E6', // blue
    '#9BC1AD', // mint
    '#E6BC8F', // peach
    '#BFBFBF', // gray
    '#8FB890', // mint green
    '#C9A3CD', // lavender
    '#E6B589', // orange
    '#8FCCD4', // cyan
    '#CCD48F', // lime
    '#E091A7', // pink
    '#A8DADC', // Light Cyan
    '#457B9D', // Steel Blue
    '#F4A261', // Sandy Brown
    '#2A9D8F', // Light Sea Green
    '#E9C46A', // Sandstorm
    '#264653', // Charcoal
    '#F4E1D2', // Linen
    '#81B29A', // Sage
    '#F2CC8F', // Buff
    '#E76F51'  // Terra Cotta
];

let currentColorIndex = 0;
document.getElementById("theme-btn").addEventListener("click", function(event) {
    document.getElementById("body").style.backgroundColor = colors[currentColorIndex];
    document.getElementById("main").style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});