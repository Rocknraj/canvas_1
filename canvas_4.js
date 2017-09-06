/**
 * Lesson 2 - Basic usage of drawning lines, using text, gradients, and images
 */


myCanvasAnimation = () => {
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
    let gd = context.createRadialGradient(150,150,50,150,150,200); // centered
    // let gd = context.createRadialGradient(150,150,50,250,250,200); // offset center
    // let gd = context.createRadialGradient(250,150,100,150,150,10);
    // let gd = context.createRadialGradient(150,150,200,150,150,100);
    // let gd = context.createRadialGradient(150,150,50,250,150,100); // triangle pointing straight left
    // let gd = context.createRadialGradient(150,150,50,250,250,100); // triangle pointing diagonally left and up

    // args are centerXY for circle center, the radius, centerXY, other radius
    gd.addColorStop(0, 'red');
    gd.addColorStop(1, 'white');
    context.fillStyle = gd;
    // args are starting coords and finishing coords of the fill
    context.fillRect(0,0,300,300);
		
		context.fillStyle = "#ff1a1a";
		// note that fillStyle is a property not a method
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
