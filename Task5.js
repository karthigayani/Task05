// 1.Do the given program in anonymous function & IIFE:
// a. Print Odd Numbers in an array
// b. Convert all the strings to title caps in a string array
// c. Sum of all numbers in an array
// d. Return all the prime numbers in an array
// e. Return all the Palindromes in an array
// f. Return median of two sorted arrays of the same size
// g. Remove duplicates from an array
// h. Rotate an array by k times

// 2. Do the below programs in arrow function:
// a. Print Odd Numbers in an array
// b. Convert all the strings to title caps in a string array
// c. Sum of all numbers in an array
// d. Return all the prime numbers in an array
// e. Return all the Palindromes in an array


var arr1 = [4,6,18,25,13,4,78,59,37,999,111,222,333,444,555,666,777,888,999,1010];
var Odd = "";
// //Anonymous Function
// var Result1=function(arr1){
//    for(var i=0;i<arr1.length;i++){
//       if(arr1[i]%2!=0){
//          Odd = Odd+(arr1[i])+" ";
//       }
//    }
//    return Odd;
//    }
//    console.log((Result1(arr1)).trim());
// //IIFE Function
// // function keyword, function name, parameter, automatic function call(so no need of function call),console.log()
// (function Result1(arr1){
//    for(var i=0;i<arr1.length;i++){
//       if(arr1[i]%2!=0){
//          Odd = Odd+(arr1[i])+" ";
//       }
//    }
//    console.log(Odd.trim());
// })(arr1);

// // Arrow Function
// var Result1=()=>{
//    for(var i=0;i<arr1.length;i++){
//             if(arr1[i]%2!=0){
//                Odd = Odd+(arr1[i])+" ";
//             }
//          }
//       return Odd;
//    }
// console.log((Result1(arr1)).trim());        

var arr2 = ["karthi","MohanKrishna","VIKRAM","JayaRaJ"];
var titlecaps = [];

// //Anonymous Function
// var Result2=function(arr2){
//    for(var i=0;i<arr2.length;i++){
//       arr2[i]=arr2[i].toLowerCase();
//       arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
//       titlecaps.push(arr2[i]);
//    }
//    return titlecaps;
// }
// console.log(Result2(arr2));

// //IIFE Function
// (function Result2(arr2){
//    for(var i=0;i<arr2.length;i++){
//       arr2[i]=arr2[i].toLowerCase();
//       arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
//       titlecaps.push(arr2[i]);
//    }
//    console.log(titlecaps);
// })(arr2);

// // Arrow Function
// var Result2=()=>{
//    for(var i=0;i<arr2.length;i++){
//             arr2[i]=arr2[i].toLowerCase();
//             arr2[i]=arr2[i].charAt(0).toUpperCase()+arr2[i].slice(1);
//             titlecaps.push(arr2[i]);
//          }
//       return titlecaps;
//    }
// console.log(Result2(arr2));

var arr3 = [5,7.423,68.7,-101,94.21,4.8];
var Sum = 0;

// //Anonymous Function
// var Result3=function(arr3){
//       for(var i=0;i<arr3.length;i++){
//       Sum=Sum+arr3[i];
//    }
//    return Sum;
// }
// console.log(Result3(arr3));

// //IIFE Function
// (function Result3(arr3){
//    for(var i=0;i<arr3.length;i++){
//       Sum=Sum+arr3[i];
//    }
//    console.log(Sum);
// })(arr3);

// // Arrow Function
// var Result3=()=>{
//       for(var i=0;i<arr3.length;i++){
//       Sum=Sum+arr3[i];
//    }
//    return Sum;
// }
// console.log(Result3(arr3));  

// var arr4 = [1,4,5,6,7,9,13,15,18,19,23];
// var Prime = "";
// //Anonymous Function
// var Result4=function(arr4){
//    for(var i=0;i<arr4.length;i++){
//       if(arr4[i]%1==0 && arr4[i]%aar4[i]==0){
//          Prime = Prime+(arr4[i])+" ";
//       }
//    }
//    return Prime;
//    }
//    console.log((Result4(arr4)).trim());

var arr5 = ["mom","cat","dad","karthi","143","454","wow","racecar","surya"];
var palindrome = [];
// //Anonymous Function
// var Result5=function(arr5){
//    for(var i=0;i<arr5.length;i++){
//       var OS = arr5[i]; //-->Original String(OS)
//       var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
//       if(OS==RS){
//          palindrome.push(arr5[i]);
//       }
//    }
//    return palindrome;
//    }
//    console.log(Result5(arr5));
// //IIFE Function
// // function keyword, function name, parameter, automatic function call(so no need of function call),console.log()
// (function Result5(arr5){
//    for(var i=0;i<arr5.length;i++){
//       var OS = arr5[i]; //-->Original String(OS)
//       var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
//       if(OS==RS){
//          palindrome.push(arr5[i]);
//       }
//    }
//    console.log(palindrome);
// })(arr5);

// // Arrow Function
// var Result5=()=>{
//    for(var i=0;i<arr5.length;i++){
//       var OS = arr5[i]; //-->Original String(OS)
//       var RS = arr5[i].split("").reverse().join(""); //-->Reverse String(RS)
//       if(OS==RS){
//          palindrome.push(arr5[i]);
//       }
//    }
//     return palindrome;
// }
// console.log(Result5(arr5));    

var arr6=[1,2,3,4,5];
var k;
// //Anonymous Function
// var Result6=function(arr6,k){
//    for(var i=0;i<k;i++){
//       arr6.unshift(arr6.pop());
//    }
//    return arr6;
//    }
//    console.log(Result6(arr6,1));
   
// //IIFE Function
// (function Result6(arr6,k){
//    for(var i=0;i<k;i++){
//       arr6.unshift(arr6.pop());
//    }
//    console.log(arr6);
// })(arr6,2);




