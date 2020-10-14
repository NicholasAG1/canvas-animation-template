// Bubble Data Options

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800
cnv.height = 600

// Global Variables
let colorNames = ["red", "green", "blue", "orange", "magenta", "purple"]

// Parallel Arays to store Buble Data
let bals = Math.randomInt(50, 5000)
let xVals = [];
let yVals = [];
let rVals = [];
let colorVals = [];
for (let n = 0; n < bals; n++) {
    xVals.push(Math.randomDec(0, cnv.width));
    yVals.push(Math.randomDec(0, cnv.height));
    rVals.push(Math.randomDec(10, 40))
    colorVals.push(Math.randomElement(colorNames))
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    // Draw Bubble 
    
    for (let i = 0; i < xVals.length; i++) {
        // Move Bubble
        xVals[i] += Math.randomDec(-5, 5)
        yVals[i] += Math.randomDec(-5, 5)
        // Set Color for Bubble
        ctx.strokeStyle = colorNames[i]
        // Draw Bubble
        strokeCircle(xVals[i], yVals[i], rVals[i]);
    }
    // Request another Animation Frame
    requestAnimationFrame(draw);
}