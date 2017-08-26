/**
 * Created by owner on 8/26/2017.
 */

myCanvasAnimation = () => {
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");

    initialX = 60;
    finalX = 200; // start and end points for animation

    drawCanvas = () => {
        context.clearRect(0,0,300,300); // stops moving circle from leaving a "trail"
        context.beginPath();
        context.arc(initialX, 60, 50, 0, 2*Math.PI, true);
        context.fillStyle = "#00f";
        context.fill();
        context.stroke();

        if (initialX < finalX ) {
            initialX = initialX + 1;
        }

        window.requestAnimationFrame(drawCanvas);

    }


    drawCanvas();
}
