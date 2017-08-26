/**
 * Created by owner on 8/26/2017.
 */

myCanvasAnimation = () => {
    let myCanvas = document.getElementById("myCanvas");
    let context = myCanvas.getContext("2d");

    drawCanvas = () => {
        context.beginPath();
        context.arc(50,50,40,0,2*Math.PI);
        context.stroke();
    }

    drawCanvas();
}
