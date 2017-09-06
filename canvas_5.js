/**
 * Lesson 2 - Basic usage of drawning lines, using text, gradients, and images
 */


myCanvasAnimation = () => {
	drawingImage();
}	

let image1;

drawingImage = () => {

	image1 = new Image();
	image1.src = "happy-girl-stick-figure.jpg";
	image1.addEventListener('load', loadingImage);

}

loadingImage = () => {
	let canvas = document.getElementById('myCanvas'),
	context = canvas.getContext('2d');
	// the args are the image object, and coordinates where you want to put it
	context.drawImage(image1, 10, 10);
}

