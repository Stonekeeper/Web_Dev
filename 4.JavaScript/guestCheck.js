var guestList=["Tony","Bruce","Strange","Steve","Thor","Clark"];

var guestName=prompt("Enter your name.");
if(guestList.includes(guestName))
{
    alert("Welcome "+guestName+".");
} else {
    alert("See you next time "+guestName+".");
} 
