let n=Math.floor(Math.random()*10);
let harm = 0.0;
if (n < 0 || n == 0)
{
    console.log("Wrong input");
}
else
{
    let res="";
    for (let i = 1; i <= n; i++)
    {
        harm = harm + (1.0/ i);
        if (i == n)
        {
            res=res+("1/" + i + "=");
            break;
        }
        res=res+("1/" + i + "+");
    }
    console.log(res+harm);
}