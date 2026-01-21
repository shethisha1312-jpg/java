//Arithmatic operator

// let a=5;
// let b=2;
// let c=a+b;

// console.log("a=",a,"b=",b);
// console.log("a+b=",a+b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);


//unary operator
// let a=5;
// let b=2;

// console.log("a=",a,"b=",b);

// console.log("--a=",--a);
// console.log("a=",b);

//asignment operator

// let a=5;
// let b=2;
// a-=4;
// console.log("a =",a);
 
//comparition operator
// let a=5;
// let b=3;
// console.log("a>b",a > b);

//logical operator

// let a=6;
// let b=5;

// let cond1=a<b;
// let cond2=a==6;

// console.log("cond1 || cond2=",cond1 || cond2);

//conditional statment

// let age=12;

// let mode="dark";
// let color;

// if(mode === "dark"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color);
// if(age>18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cna not vote");
// }

// let a=3;
// if(a%2==0){
//     console.log("number is even");
// }
// else{
//     console.log("number is odd");
// }

// let mod="pink";
// let color;

// if(mod === "dark"){
//     color="black";
// }else if(mod === "blue"){
//     color="blue";
// }else if(mod === "pink"){
//     color="pink";

// }
// else{
//     color="white";
// }

// console.log(color);

// let age=11;
// let res=age >= 18 ? "adult" : "not adult";
// console.log(res);

//practice q-1
// let num=prompt("Enter a numnber");

// if(num % 5 === 0){
//     console.log(num,"is multiple of 5");
// }
// else{
//     console.log(num,"is not  multiple of 5");
// }

//practice q-2
let score= prompt("Enter the score:");
let gread;

if(score>=90 && score<=100){
    gread="A";
}else if(score>=70 && score<=89){
    gread="B";
}else if(score>=60 && score<=69){
    gread="C";

}else if(score>=50 && score<=59){
    gread="D";
}else if(score>=0 && score<=49){
    gread="F";
}
console.log("according to your scores,your gread was:",gread);
