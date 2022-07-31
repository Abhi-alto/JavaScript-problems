let dice=0,sum=0;
for(let turn=1;turn<=5;turn++)
{
    dice=Math.floor(Math.random()*100);
    if(dice<10)
    {
        while(dice<10)
        {
            dice=Math.floor(Math.random()*100);
        }
    }
    console.log(dice);
    sum+=dice;
}
console.log("Sum = "+sum);
console.log("average = "+(sum/5));