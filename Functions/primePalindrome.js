let check=Math.floor(Math.random()*1000);
console.log(check);
if(prime(check))
{
    if(prime
        (pal
        (check)
        )
        )                   //checks if the palindrome of the prime number is also a prime number
    {
        console.log("Palindrome of the prime number is a prime itself");
    }
    else{
        console.log("Palindrome of the prime number is not prime");
    }
}
else
{
    console.log("Not a prime number");
}


function pal(check)                 //function to get a palindrome number
{
	let dummy=check;              //dummy variable with value same as the number itself
	let r=0;                    //for the reverse of the number
	while(dummy>0)
	{
		let d=dummy % 10;
		r=r * 10 + d;
		dummy=Math.floor(dummy/10);
    }
    return r;
}


function prime(num)             //function to check if the number is prime or not
{
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
        return false;
    }
    else
    {
        return true;
    }
}