let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
console.log(v)

function myfunction(m: any, z: any) {
    console.log(m + z)
}
 myfunction(11,34);