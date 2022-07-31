let Unit=["Ones","Tens","Hundreds","Thousands "];
let number=Math.floor(Math.random()*1000);
console.log(number+" is the number");
let place=0;
while(number>0.9)
{
    console.log(Unit[place]+" place is "+(number%10));
    number=Math.floor(number/10);
    place++;
}
