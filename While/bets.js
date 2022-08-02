let w=1;
let money=100;
let won=0;
let bet=0;
while (money < 200 )
{
	let x=Math.ceil(Math.random()*2)
	bet=bet + 1 ;
	if (x ==w)
	{
		money=money + 1;
		won=won + 1;
	}
    else
	{
        money= money - 1;
    }
	if(money== 0)
	{
		console.log(" Broke and out");
		break
    }
}
console.log(bet+" bets made");
console.log(won+" times won");