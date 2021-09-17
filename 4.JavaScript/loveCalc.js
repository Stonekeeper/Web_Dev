prompt("Name of 1st Person");
prompt("Name of 2nd Person");

var love=Math.random();
    love=love*100+1;
    love=Math.floor(love);

    if(love>65){
       alert("Love B/W both people is "+love+"% Blah Blah Blah");
       } else if(love>30 && love<=65) { 
       alert("Love B/W both people is "+love+"%. Noice...");
       } else if(love<=30){
         alert("Love B/W both people is "+love+"%.");
       }
