//your JS code here. If required.
let angle = 0; // Initial rotation angle
const line = document.getElementById("line");

// Function to rotate the line
function rotateLine() {
    angle += 2; // Increase angle by 2 degrees
    line.style.transform = `rotate(${angle}deg)`;
}

// Set interval to rotate the line every 20 milliseconds
setInterval(rotateLine, 20);
