/**
 * Lesson 2 - Basic usage of drawning lines, using text, gradients, and images
 */


myCanvasAnimation = () => {
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
		
		context.fillStyle = "#ff1a1a";
		// note that fillStyle is a property not a method
		context.fillRect(0, 0, 300, 300);
		context.moveTo(0,0);
		context.lineTo(300,300);
		context.stroke();

		context.moveTo(300,0);
		context.lineTo(0,300);
		context.stroke();

		context.font = "20px Georgia Italic";
		context.fillStyle = "#ffffff";
		context.fillText("Write to Me!!!",90, 160);
}	
