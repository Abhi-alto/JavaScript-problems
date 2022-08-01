let n=Math.floor(Math.random()*15);
console.log(n);
for (let i = 1; i <= n; i++)
{
    if(Math.pow(2,i)<=256)
    {
        console.log("2 ^ " + i + " = " + (Math.pow(2, i)));
    }
    else
    {
        break;
    }
}
