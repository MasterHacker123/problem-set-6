/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
let canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
context.font = '48px sans-serif';
context.strokeText('Hello, World!', 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {

  let height = prompt("Height:");
  let width = prompt("Width:");
  let x = prompt("X:");
  let y = prompt("Y:");
  let canvas = document.getElementById('canvas2');
  const context = canvas.getContext('2d');

  height = Number(height);
  width = Number(width);
  x = Number(x);
  y = Number(y);

  if (isNaN(height) == true || isNaN(width) == true || isNaN(x) == true || isNaN(y) == true) {
    alert("One of your inputs is not a number.");
  } else if (height < 1) {
    alert("Your height is too small.");
  } else if (width < 1) {
    alert("Your width is too small.");
  } else if (x < 5) {
    alert("Your x-coordinate is too small.");
  } else if (y < 5) {
    alert("Your y-coordinate is too small.");
  } else {
    context.strokeRect(x, y, width, height);
  }
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let color = prompt("Color:");
  let colorOutput = document.getElementById('canvas3').getContext('2d');
  if (color != "black" && color != "blue" && color != "green" && color != "orange" && color != "purple" && color != "red" && color != "yellow") {
    alert(color + " is not a supported color.");
  } else {
    colorOutput.fillStyle = color;
    colorOutput.fillRect(10, 10, 100, 50);
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let sideOne = prompt("Side 1:");
  let sideTwo = prompt("Side 2:");
  let sideThree = prompt("Side 3:");
  let sideArr = new Array();

  let canvas = document.getElementById('canvas4');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  sideOne = Number(sideOne);
  sideTwo = Number(sideTwo);
  sideThree = Number(sideThree);

  sideArr.push(sideOne);
  sideArr.push(sideTwo);
  sideArr.push(sideThree);
  sideArr.sort(function(a, b){return a-b});
  let one = sideArr[0];
  let two = sideArr[1];


  if (isNaN(sideOne) == true || isNaN(sideTwo) == true || isNaN(sideThree) == true) {
    alert("One of your inputs is not a number.");
  } else if (sideOne <= 0 || sideTwo <= 0 || sideThree <= 0) {
    alert("That is not a valid triangle.");
  } else if ((sideArr[0] ** 2) + (sideArr[1] ** 2) != (sideArr[2] ** 2)){
    alert("That is not a valid triangle.");
  } else if ((sideArr[0] + 10) > canvas.height || (sideArr[0] + 10) > canvas.width ) {
    alert("The triangle will not fit on the canvas.");
  } else {
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(10, 10 + one);
    context.lineTo(10 + two, 10 + one);
    context.closePath();
    context.stroke();
    lineWidth = 1;
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius = prompt("Please enter a radius:");
  let canvas = document.getElementById('canvas5');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  radius = Number(radius);
  if (isNaN(radius) == true) {
    alert("Your input is not a number.");
  } else if (radius < 1) {
    alert("Your radius is too small.");
  } else if (radius > 250){
    alert("The smiley face will not fit on the canvas.");
  } else {
    context.beginPath();
    context.arc(radius + 10, radius + 10, radius, 0 * Math.PI, 2 * Math.PI);
    context.moveTo(1.7 * radius + 10, radius + 10);
    context.arc(radius + 10, radius + 10, 0.7 * radius, 0 * Math.PI, Math.PI);
    context.moveTo(0.8 * radius + 10, 0.7 * radius + 10);
    context.arc(0.7 * radius + 10, 0.7 * radius + 10, 0.1 * radius, 0 * Math.PI, 2 * Math.PI);
    context.moveTo(1.4 * radius + 10, 0.7 * radius + 10);
    context.arc(1.3 * radius + 10, 0.7 * radius + 10, 0.1 * radius, 0 * Math.PI, 2 * Math.PI);
    context.closePath();
    context.stroke();
    lineWidth = 1;
  }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
let outerRadius = prompt("Outer Radius:");
let innerRadius = prompt("Inner Radius:");
let canvas = document.getElementById('canvas6');
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
outerRadius = Number(outerRadius);
innerRadius = Number(innerRadius);
if (isNaN(outerRadius) == true || isNaN(innerRadius) == true) {
  alert("One of your inputs is not a number.");
} else if (outerRadius < 2) {
  alert("Your outer radius is too small.");
} else if (innerRadius < 1) {
  alert("Your inner radius is too small.");
} else if (outerRadius <= innerRadius) {
  alert("Your outer radius must be larger than your inner radius.")
} else {
  context.beginPath();
  context.moveTo(125, 125 - outerRadius);
  let x = 0;
  let angle = 0 * Math.PI;
  while (x < 5) {
    context.lineTo(Math.cos(1.3 * Math.PI - angle) * innerRadius + 125, Math.sin(1.3 * Math.PI - angle) * innerRadius + 125);
    context.lineTo(Math.cos(1.1 * Math.PI - angle) * outerRadius + 125, Math.sin(1.1 * Math.PI - angle) * outerRadius + 125);
    angle = angle + 0.4 * Math.PI;
    x = x + 1;
  }
  context.closePath();
  context.stroke();
  lineWidth = 1;
}

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let radius = 40 / Math.sin(0.125 * Math.PI);
  let canvas = document.getElementById('canvas7');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.moveTo(Math.cos(0.125 * Math.PI) * radius + 110, Math.sin(0.125 * Math.PI) * radius + 110);
  let x = 0;
  let angle = 0.25 * Math.PI;
  while (x < 8) {
    context.lineTo(Math.cos(0.125 * Math.PI + angle) * radius + 110, Math.sin(0.125 * Math.PI + angle) * radius + 110);
    angle = angle + 0.25 * Math.PI;
    x = x + 1;
  }
  context.closePath();
  context.fillStyle = "red";
  context.fill();
  context.font = "65px Arial";
  context.fillStyle = "white";
  context.fillText("STOP", 22, 130);
  lineWidth = 1;
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let length = prompt("Length:");
  length = Number(length);
  let canvas = document.getElementById('canvas8');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (isNaN(length) == true) {
      alert("Your input is not a number.");
  } else if (length > 100.2) {
      alert("The pyramid will not fit on the canvas.");
  } else {
      context.beginPath();
      let x = 0;
      let limit = 5;
      let xOffset = 0;
      let yOffset = 0;
      let y = 0;
      let initialOffset = 0;
      while (y < 5) {
        while (x < limit) {
          context.strokeRect(10 + xOffset + initialOffset, canvas.height - 10 - length - yOffset, length, length);
          xOffset = xOffset + length;
          x++;
        }
        y++;
        x = 0;
        xOffset = 0;
        yOffset += length;
        limit -= 1;
        initialOffset += (length / 2);
      }
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 * 760 h by 1024 w
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let color1 = prompt("House Color:");
  let color2 = prompt("Front Door Color:");
  let canvas = document.getElementById('canvas9');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  let colorOutput = document.getElementById('canvas3').getContext('2d');
  if (color1 != "black" && color1 != "blue" && color1 != "green" && color1 != "orange" && color1 != "purple" && color1 != "red" && color1 != "yellow") {
    alert("One of your colors is not supported.");
  } else if (color2 != "black" && color2 != "blue" && color2 != "green" && color2 != "orange" && color2 != "purple" && color2 != "red" && color2 != "yellow") {
    alert("One of your colors is not supported.");
  } else {
    context.beginPath();
    context.fillStyle = color1;
    context.fillRect(150, canvas.height / 3, canvas.width - 300, 2 * canvas.height / 3 - 10);
    context.closePath();
    lineWidth = 10;

    context.beginPath();
    context.moveTo(150, canvas.height / 3);
    context.lineTo(canvas.width / 2, 10);
    context.lineTo(canvas.width - 150, canvas.height / 3);
    context.closePath();
    context.fillStyle = "gray";
    context.fill();
    lineWidth = 10;

    context.beginPath();
    context.fillStyle = "LightBlue";
    context.fillRect(275, canvas.height / 3 + 75, 75, 75);
    context.closePath();

    context.beginPath();
    context.moveTo(150, canvas.height / 3);
    context.lineTo(canvas.width / 2, 10);
    context.lineTo(canvas.width - 150, canvas.height / 3);
    context.closePath();
    context.fillStyle = "gray";
    context.fill();
  }

}
