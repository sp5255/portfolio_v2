const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(40, 120);
ctx.quadraticCurveTo(200, 120, 30, 0);
ctx.stroke();
ctx.beginPath(); // Start a new path
ctx.moveTo(40, 100); // Move the pen to (30, 50)
ctx.lineTo(40, 120); // Draw a line to (150, 100)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(130, 30);
ctx.quadraticCurveTo(-25, 10, 155, 160);
ctx.stroke();

ctx.beginPath(); // Start a new path
ctx.moveTo(130, 30); // Move the pen to (30, 50)
ctx.lineTo(130, 50); // Draw a line to (150, 100)
ctx.stroke();

/* 
<!DOCTYPE html>
<html>
<body>
<h1>HTML5 Canvas quadraticCurveTo() Method</h1>

<canvas id="myCanvas"  style="border:1px solid #000000;">
Sorry, your browser does not support canvas.
</canvas>

<script>
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(40, 120);
ctx.quadraticCurveTo(200, 120,30, 0);
ctx.stroke();
ctx.beginPath(); // Start a new path
ctx.moveTo(40, 100); // Move the pen to (30, 50)
ctx.lineTo(40, 120); // Draw a line to (150, 100)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(130, 30);
ctx.quadraticCurveTo(-25, 10, 155, 160);
ctx.stroke();

ctx.beginPath(); // Start a new path
ctx.moveTo(130, 30); // Move the pen to (30, 50)
ctx.lineTo(130, 50); // Draw a line to (150, 100)
ctx.stroke();

</script>

</body>
</html>
 */
