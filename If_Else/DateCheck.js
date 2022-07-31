//Date check
let d="25/08/2015";
let DaysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];
let check=d.split('/');
if( check[0]<=DaysInMonth[check[1]-1] )
{
    if(check[1]==3 && check[0]>=20 ||           
    check[1]>3&&check[1]<6&&check[0]>0||
    check[1]==6&&check[0]<=20)       //check[0]<=DaysInMonth[check[1]-1].......checks if the number of days entered in the current month is not exceeding the days in that month
    {
        console.log("True");
    }
    else
    {
        console.log("False");
    }
}
else{
    console.log("Wrong input");
}
