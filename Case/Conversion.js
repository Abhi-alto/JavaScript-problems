const ps=require("readline-sync");
let ch=ps.question("Enter your choice\n1-feet to inch\n2-inch to feet\n3-feet to meter\n4-meter to feet\n");
let value=ps.question("Enter the value to be converted\n");
let converted=0.0;
switch(ch)
{
    case "1":
        converted=12*value;
        console.log(converted);
        break;
    case "2":
        converted=value/12;
        break;
    case "3":
        converted=value/3.281;
        break;
    case "4":
        converted=value*3.281;
        break;
    default:
        converted=-9999;
        console.log(converted);
}
if(converted!=-9999)
{
    console.log("Converted value is "+converted);
}
else
{
    console.log("Wrong choice given");
}