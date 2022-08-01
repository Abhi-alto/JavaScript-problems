let name="";
let num=Math.floor(Math.random()*10000);
console.log(num);
let dummy=num;
let d=0;     //no. of digits
while(dummy>0.9)
{
    d++;
    dummy=dummy/10;
}
let Unit=["Ones","Tens","Hundreds","Thousands "];
switch(d)
{
    case 1:
       console.log(num+" is at the "+Unit[d]+" place");
        break;
    case 2:
        console.log((num%10)+" is at the "+Unit[d-3]+" place");
        console.log((num%100)/10+" is at the "+Unit[d-2]+" place");
        break;
    case 3:
        console.log((num%10)+" is at the "+Unit[d-3]+" place");
        console.log((num%100)/10+" is at the "+Unit[d-2]+" place");
        console.log((num/100)+" is at the "+Unit[d-1]+" place");
        break;
    case 4:
        let place=0;
        while(num>0.9)
        {
            console.log(Unit[place]+" place is "+(num%10));
            num=Math.floor(num/10);
            place++;
        }
        break;
    default:
        console.log("Invalid");
}
