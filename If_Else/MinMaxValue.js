let rand=0,min=999,max=100;                                 //Initial values given to the numbers min=999 as no three digit number is greater than 999
for(let turn=1;turn<=5;turn++)
{
    rand=Math.floor(Math.random()*1000);
    if(rand<99||rand>999)                       //So that at all cost we get  three digit number
    {
        while(dice<10)
        {
            rand=Math.floor(Math.random()*1000);
        }
    }
    if(rand<=min)
    {
        min=rand;
    }
    if(rand>max)
    {
        max=rand;
    }
    console.log(rand);
}
console.log("Min. of all 5 numbers is "+min);
console.log("Max. of all 5 numbers is "+max);