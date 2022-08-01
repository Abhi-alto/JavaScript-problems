let num=Math.floor(Math.random()*100)+1;
console.log("Prime factorization of " + num + " = ");
for (let i = 2; i <= Math.floor(num / 2); i++)            //factors are only from 2 to the half of the number
{
    while (num % i == 0)              
    {
        console.log(i + " ");
        num = Math.floor(num / i);                          //remove that particular factor by updating the number value
    }
}
if(num>1)
{
    console.log(num);
}
