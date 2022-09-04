canvas=document.getElementById("micanvas");
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=225;

background_image="parkingLot.jpg";
greencar_image="car2.png";

//Set initial position for a car image.

function add() {
	etiquetabackground_image=new Image();
    etiquetabackground_image.onload=uploadBackground;
    etiquetabackground_image.src=background_image;
    etiquetabackground_image=new Image();
    etiquetagreencar_image.onload=uploadgreencar;
    etiquetagreencar_image.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(etiquetabackground_image,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(etiquetagreencar_image,greencar_x,greencar_y,greencar_width,greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if(greencar_y>=0){
        greencar_y=greencar_y-10;
        console.log("cuando se presiona la flecha arriba x es igual "+greencar_x+" y y es igual "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function down(){
    if(greencar_y<=550){
        greencar_y=greencar_y+10;
        console.log("cuando se presiona la flecha arriba x es igual "+greencar_x+" y y es igual "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function left(){
    if(greencar_x>=0){
        greencar_x=greencar_x-10;
        console.log("cuando se presiona la flecha arriba x es igual "+greencar_x+" y y es igual "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function right(){
    if(greencar_x<=750){
        greencar_x=greencar_x+10;
        console.log("cuando se presiona la flecha arriba x es igual "+greencar_x+" y y es igual "+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}