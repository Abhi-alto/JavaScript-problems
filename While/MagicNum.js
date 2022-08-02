let num=Math.floor(Math.random()*100);
console.log(num);
let sumOfDigits=num;
while ( sumOfDigits>9 )
{
    let n=sumOfDigits;
	sumOfDigits=0;
	while(n>0)
	{
		sumOfDigits=sumOfDigits+n%10;
		n=Math.floor(n/10);
    }
}
if(sumOfDigits==1)
{
    console.log ("Magic number");
}
else
{
    console.log ("Not a magic number");
}