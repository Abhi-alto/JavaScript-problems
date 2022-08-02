let choice=Math.ceil(Math.random()*2);
let convert=Math.floor(Math.random()*212);
let value,value1=0;
if(choice==1)
{
    console.log("Degree Celcius to Farenheit conversion");
    DeToFaren(convert);
}
else
{
    console.log("Degree Farenheit to Celcius conversion");
    FaToDe(convert);
}
function DeToFaren(value)
{
    if (value>=0 &&value<101)
    {
        let degf=(value * (9 / 5)) + 32; 
        console.log(value+" degree celcius is equal to "+degf+" Farenheit");
    }
    else
    {
        console.log("Wrong input");
    }
}
function FaToDe(value1)
{
    if( value1>31 && value1<213 )
    {
        let part=value1 - 32;
        let degc=(part* 5) / 9 ;
        console.log(value1+" farenheit is equal to "+degc+" Celcius");
    }
    else
    {
        console.log("Wrong input");
    }
}
