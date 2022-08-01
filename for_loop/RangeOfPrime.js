for(let y=1;y<=10;y++)
{
    let num=Math.floor(Math.random()*100);
    let flag=0;
    for(let x=2;x<=(num/2);x++)
    {
        if(num%x==0)
        {
            flag++;
            break;
        }
    }
    if(flag==0)
     {
        console.log(num+" is a Prime number");
    }
    else
    {
        console.log(num+" is not a prime number");
    }
}