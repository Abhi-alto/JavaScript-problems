let name="";
switch(Math.floor(Math.random()*7))
{
    case 1:
       name="Sunday";
        break;
    case 2:
        name="Monaday";
        break;
    case 3:
        name="Tuesday";
        break;
    case 4:
        name="Wednesday";
        break;
    case 5:
        name="Thursday";
        break;
    case 6:
        name="Friday";
        break;
    case 7:
        name="Saturday";
        break;
    default:
        name="Invalid";
}
console.log(name);