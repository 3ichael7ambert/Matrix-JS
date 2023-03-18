// Get the canvas element and create a 2D drawing context
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the number of columns and the size of the characters
var columns = Math.floor(canvas.width / 10);
var charSize = 16;

// Create an array of characters to be used in the animation
var charArray = [];
for (var i = 0; i < 256; i++) {
  charArray[i] = String.fromCharCode(i);
}

// Create an array to store the column positions
var columnPositions = [];
for (var i = 0; i < columns; i++) {
  columnPositions[i] = Math.floor(Math.random() * canvas.height);
}

// Function to draw the characters on the canvas
function draw() {
  // Set the text color to green
  ctx.fillStyle = "#00ff00";
  
  // Set the font size and family
  ctx.font = charSize + "px monospace";
  
  // Loop through each column
  for (var i = 0; i < columns; i++) {
    // Get a random character from the array
    var char = charArray[Math.floor(Math.random() * charArray.length)];
    
    // Draw the character at the column position
    ctx.fillText(char, i * 10, columnPositions[i]);
    
    // Move the column position down by the character size
    columnPositions[i] += charSize;
    
    // If the column position is off the bottom of the canvas, reset it to the top
    if (columnPositions[i] > canvas.height + charSize) {
      columnPositions[i] = 0;
    }
  }
}

// Function to clear the canvas and redraw the characters
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw the characters
  draw();
  
  // Request another animation frame
  requestAnimationFrame(animate);
}

// Call the animate function to start the animation
animate();
