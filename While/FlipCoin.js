let heads=1;
let flag=0;
let head_Times=0;
let tail_times=0;
while(head_Times<11||tail_times<11)
{
    let flip=Math.ceil(Math.random()*2);
    if(flip==heads)
    {
        head_Times++;
        if(head_Times==11)
        {
            break;
        }
    }
    else
    {
        tail_times++;
        if(tail_times==11)
        {
            flag++;
        }
    }
}
if(flag==1)
{
    console.log("Tails has won 11 times");
}
else{
    console.log("Heads has won 11 times");
}