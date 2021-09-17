function leapYear(year){
    if(year%4==0 && year%100!=0){
        alert(year+" is a leap Year.");
    } else if (year%4==0 && year%100==0 && year%400==0){
        alert(year+" is a leap Year.");
    } else {
        alert(year+" is not a leap Year.");
    }
}

var year=prompt("Enter the Year.");
leapYear(year);
