var cityName = prompt("Enter Your City Name");
if(cityName == "karachi"){
    document.write("Welcome To The City Of Lights\n" + "<br>");
}
else{
    document.write("Wow! Your City Is Cool.\n" + "<br>");
}
 
var gender = prompt("Enter Your Gender");
if(gender == "male"){
    document.write("Good Morning Sir\n" + "<br>");
}
else{
    document.write("Good Morning Ma'am\n" + "<br>");
}

document.write("The answer of (a) is: The Alert will display<br>");
document.write("The answer of (b) is: The Alert will not display<br>");
document.write("The answer of (c) is: the 1st condition is false , the 2nd condition is true , the 3rd condition is false , the 4th condition is true<br>");
document.write("the answer of (d) is: The cost equals<br>");
document.write("the answer of (e) is: True wil display<br>");
document.write("the answer of (f) is: car is smaller than cat<br>");

var temp= prompt("What is the temprature today");
if(temp>=40){
    document.write("It is too hot outside.<br>");
}
else if(temp>=30){
    document.write("The weather today is normal.<br>");
}
else if(temp>=20){
    document.write("Today's weather is cool.<br>");
}
else if(temp>=10){
    document.write("OMG! Today's weather is cool.<br>");
}
else{
    document.write("The weather is too cool now.<br>");
}




var num= prompt("Enter a Number");
if(num % 2 === 0){
    document.write("this is even number.<br>");
}
else{
    document.write("this is odd number.<br>");
}



var number = prompt("Enter a number");
if(number % 3){
    document.write("this number is not divisible by 3.")
}
else{
    document.write("this number is divisible by 3.<br>");
}

var game= prompt("Enter a Number for game till 1 to 10");
if(game == 5){
    document.write("Bingo\n");
}
else{
    document.write("Close enough to the correct answer\n");
}



var fuel= prompt("How much fuel is remaining in your car");
if(0.25 >= fuel){
    document.write("Please refill the fuel in your car\n<br>")
}


var trafficSignalRed= prompt("Enter a first traffic signal color");
var trafficSignalYellow= prompt("Enter a second traffic signal color");
var trafficSignalGreen= prompt("Enter a third traffic signal color");
if(trafficSignalRed == "red" || trafficSignalYellow == "ready to move" || trafficSignalGreen == "move now"){
    document.write("Signal Color" + ":       " + "Message\n<br> ");
    document.write(trafficSignalRed + ":       " + "Must Stop\n<br> ");
    document.write(trafficSignalYellow + ":       " + "Ready to move\n<br> ");
    document.write(trafficSignalGreen + ":       " + "Move Now\n<br> ");
}else if(trafficSignalYellow == "ready to move"){
    document.write(trafficSignalYellow + ":       " + "Ready to move\n<br> ");
}else{
    document.write(trafficSignalGreen + ":       " + "Move Now\n<br> ");
}