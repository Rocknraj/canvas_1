/**
 * Lesson 2 - creating canvas circles and applying simple animations
 */


myCanvasAnimation = () => {
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");
		
		context.fillStyle = "#ff1a1a";
		// note that fillStyle is a property not a method
		context.fillRect(0, 0, 300, 200);
}	
