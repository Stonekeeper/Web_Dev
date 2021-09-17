var output=[];
var item=1;

function fizzBuzz()
{
    if(item%3===0 && item%5===0)
    {
        output.push("FizzBuzz");
    } else if(item%3===0)
    {
        output.push("Fizz");
    }
    else if(item%5===0)
    {
        output.push("Buzz");
    }
    else
    {
        output.push(item);
    }
    item++;
    console.log(output);
       
}
    
