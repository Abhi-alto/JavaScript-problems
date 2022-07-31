let name="";
let num=Math.floor(Math.random()*1000);
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
       console.log(d+" is at the "+Unit[d-3]+" place");
        break;
    case 2:
        console.log((d%10)+" is at the "+Unit[d-3]+" place");
        console.log((d%100)/10+" is at the "+Unit[d-2]+" place");
        break;
    case 3:
        console.log((d%10)+" is at the "+Unit[d-3]+" place");
        console.log((d%100)/10+" is at the "+Unit[d-2]+" place");
        console.log((d%1000)/10+" is at the "+Unit[d-1]+" place");
        break;
    case 4:
        console.log((d%10)+" is at the "+Unit[d-3]+" place");
        console.log((d%100)/10+" is at the "+Unit[d-2]+" place");
        console.log((d%1000)/10+" is at the "+Unit[d-1]+" place");
        console.log((d%10000)/10+" is at the "+Unit[d]+" place");
        break;
    default:
        console.log("Invalid");
}