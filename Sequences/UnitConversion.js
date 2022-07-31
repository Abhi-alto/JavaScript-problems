//Given 1ft=12 inch
let inch=(1/12);
let ft=inch*42;
console.log("42 inch = "+ft+" feet");

//square feet into acres
//1 acre = 43560 sq. feet
//1 sq. meter =10.763 sq. feet
const sqFeet=1/10.763;
let sqMeter=sqFeet*(60*40);
console.log("60 X 40 sq. feet in meters sq. is "+sqMeter+" sq. meters");
console.log("Total Area of 25 such plots is "+(sqMeter*25)+" sq. meters");