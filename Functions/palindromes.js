let check=Math.floor(Math.random()*1000);
console.log(check);
pal();
function pal()
{
	let dummy=check;
	let r=0;
	while(dummy>0)
	{
		let d=dummy % 10;
		r=r * 10 + d;
		dummy=Math.floor(dummy/10);
    }
	if(check==r)
	{
		console.log("Palindrome");
    }
	else
    {
        console.log("Not a Palindrome");
    }
}