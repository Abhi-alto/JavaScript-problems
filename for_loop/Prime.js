let num=Math.floor(Math.random()*100);
console.log(num);
let flag=0;
for(let x=2;x<=(num/2);x++)
{
    if(num%x==0)
    {
        flag++;
        break;
    }
}
if(flag!=0)
{
    console.log("Not a Prime number");
}
else
{
    console.log("Prime number");
}