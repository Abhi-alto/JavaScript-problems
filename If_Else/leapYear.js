
//Console.log("Enter a year you want to check for Leap Year in the format yyyy");
let y=2020;
let ye = y;                  //alternate variable for year
let d = 0;                         //digit variable
while(y>0.9)                  //to check no. of digits of the year ..... taken as 0.9 as it may be graeter than zero always
{
    d++;
    y = y / 10;
}
if(d>3&&d<5)
{
    if(ye%4==0)
    {
        if(ye%400==0)                       //Checking if the year is a century and a leap year
        {
            console.log("This century is a leap year");
        }
        else
        {
            console.log("This year is a leap year");
        }
    }
    else
    {
        console.log("Not a leap year");
    }
}
else
{
    console.log("Wrong input");
}