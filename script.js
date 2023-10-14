console.log("EXTERNAL JAVASCRIPT\n");
console.log("Javascript Chapter # 1");
console.log("===============");
let n = 10;         //Variable Declaration and Initizlization
console.log(n);     //Variable's Value Printing

/*
    1. Start
    2. Printing a string as "Javascript Code" and use Equals to for underline.
    3. A variable is declared named as 'a'.
    4. Initialize value in variable 'a' as 10.
    5. Print the value of 'a'. 
    6. End
*/
// Chapter#01 end

console.log("\nJavascript Chapter # 2");
console.log("===============");

console.log("\nPractice 2.1: ");
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log("VARIABLE NAME\tVARIABLE TYPE");
console.log(str1 + "\t\t\t" + typeof str1);
console.log(str2 + "\t\t\t\t" + typeof str2);
console.log(val1 + "\t\t\t" + typeof val1);
console.log(val2 + "\t\t\t\t" + typeof val2);
console.log(myNum + "\t\t\t\t" +  typeof myNum);


console.log("\nPractice 2.2: ");
let myName = "Isbah Ansari";
let age = 20;
let Javascript_code = true;

console.log("Hello! My name is " + myName + ", I'm " + age + " years old and I can code Javascript: " + Javascript_code + ".");

console.log("\nPractice 2.3: ");
let base = prompt("Enter base value: ");
let perpandicular = prompt("Enter perpandicular value: ");
let hypotenuse = base**2 + perpandicular**2;
console.log("Hypotenuse of " + base + " and " + perpandicular + " is: " + hypotenuse + ".");

console.log("\nPractice 2.4: ");
let a=3, b=10, c=29;
console.log("Before Operation: \ta = " + a + ", b = " + b + " and c = " + c + ".");
a += b;
a /= c;
c %= b;
console.log("After Operation: \ta = " + a + ", b = " + b + " and c = " + c + ".");

console.log("\nChapter Project:");
console.log("================");
let distanceMiles = prompt("Enter distance in miles: ");
distanceKM = distanceMiles * 1.60934;
console.log("The distance of " + distanceKM + " kms is equal to " + distanceMiles + " miles.");

// Chapter#02 end