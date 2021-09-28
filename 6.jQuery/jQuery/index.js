var buttonsLen=document.querySelectorAll("button").length;
for(var i=0;i<buttonsLen;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function()
{
  document.querySelector("h1").style.color="red";

});
}

$("button").click(function()
{
  $("h1").css("color","red");
})

$(document).keypress(function(event)
{
  $("h1").text(event.key);
})
