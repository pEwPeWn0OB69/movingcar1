Canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "boi.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "porsche.png";
car2_x = 10;
car2_y = 100;

background_image = "giphy.gif";


rover_x = 10;
rover_y = 10;

function add() {
    
backgrounf_imgTag = new Image(); 
background_imgTag.onload - uploadBackground;
background_imgTag.src = background_image;


car1_imgTag = new Image();
car1_imgTag.onload = uploadcar1
car1_imgTag.src = car1_image

car2_imgTag = new Image();
car2_imgTag.onload = uploadcar1
car2_imgTag.src = car2_image


}

function uploadBackground() {

ctx.drawImage(background_imagTag, 0, 0, canvas.width, canvas._height);

}

function uploadcar1() {

ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);

}

}

function uploadcar2() {

ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

}


window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{

keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '38')
{

up();
console.log("up")

}

if(keyPressed == '40')
{

down();
console.log("down")

}

if(keyPressed == '37')
{

left();
console.log("left")

}

if(keyPressed == '39')
{

right();
console.log("right")

}


}


function up()
{


if (car_y >=0)
{

car_y-= 10;
console.log("When Up Arrow is pressed = " + rover_x + " - " + rover_y);
uploadBackground();
uploadwater();
uploadrover();


}


}

function down()
{

    if (car_y <=500)
    {

    car_y += 10;
    console.log("When Down Arrow is pressed, x = " + rover_x + " | y = " + rover_y);
    uploadBackground();
    uploadwater();
    uploadrover();
    }

}

function right()
{



    if (car_y <=700)
    {
    
    car_y += 10;
    console.log("When right Arrow is pressed, x = " + rover_x + " | y = " + rover_y);
    uploadBackground();
    uploadwater();
    uploadrover();
    }


}

function left()
{


    if (car_y <= 0)
    {
    
    car_y -= 10;
    console.log("When left Arrow is pressed, x = " + rover_x + " | y = " + rover_y);
    uploadBackground();
    uploadwater();
    uploadrover();
    }


}