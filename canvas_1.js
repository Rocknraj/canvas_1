/**
 * Lesson 1 - creating canvas circles and applying simple animations
 */

myCanvasAnimation = () => {
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");

    initialX = 60;
    finalX = 200; // start and end points for animation

    drawCanvas = () => {
        context.clearRect(0,0,300,300); // stops moving circle from leaving a "trail"
        context.beginPath();
        context.arc(initialX, initialX, 40, 0, 2*Math.PI, true);
        context.fillStyle = "#00f";
        context.fill();
        context.stroke();
				
				context.beginPath();
        context.arc(initialX, 150, 40, 0, 2*Math.PI, true);
        context.fillStyle = "#0f0";
        context.fill();
        context.stroke();
				
				context.beginPath();
        context.arc(initialX, 60, 40, 0, 2*Math.PI, true);
        context.fillStyle = "#93c";
        context.fill();
        context.stroke();
				
				/**
				 * to create different animations, experiment with the 
				 * with the x and y values in the arc
				 */				

        if (initialX < finalX ) {
            initialX = initialX + 1;
        }

        window.requestAnimationFrame(drawCanvas);

    }


    drawCanvas();
}
