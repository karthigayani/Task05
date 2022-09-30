// //Anonymous Function
// var arr4=[1,2,3,4,7,13,11,16,19];
// var prime = [];
// var Result4=function(arr4){
//     for(var i=0;i<arr4.length;i++){
//         var count=0;
//       if(arr4[i]<1){
//         break;//not a prime
//       }
//     for(var j=2;j<=arr4[i];j++){
//       if(arr4[i]%j==0) {
//           count++
//       }
//     }
//       if(count<2){
//             prime.push(arr4[i]);
//       }
//     }
//    return prime;
// }
// console.log(Result4(arr4));

// // IIFE Function
// var arr4=[1,2,3,4,7,13,11,16,19];
// var prime = [];
// // function keyword, function name, parameter, automatic function call(so no need of function call),console.log()
// (function Result4(arr4){
// for(var i=0;i<arr4.length;i++){
//   var count=0;
//   if(arr4[i]<1){
//     break;//not a prime
//   }
// for(var j=2;j<=arr4[i];j++){
//   if(arr4[i]%j==0){
//     count++
//   }
// }
//   if(count<2){
//     prime.push(arr4[i]);
//   }
// }
// console.log(prime);
// })(arr4);

// // Arrow Function
// var arr4=[1,2,3,4,7,13,11,16,19];
// var prime = [];
// var Result4=()=>{
//   for(var i=0;i<arr4.length;i++){
//     var count=0;
//   if(arr4[i]<1){
//     break;//not a prime
//   }
// for(var j=2;j<=arr4[i];j++){
//   if(arr4[i]%j==0){
//     count++
//   }
// }
//   if(count<2){
//     prime.push(arr4[i]);
//   }
// }
// return prime;
// }
// console.log(Result4(arr4));    

// //Anonymous Function
// var m1 = [1,111,24,38,93];
// var m2 = [202,76,65,501,41];
// var median = function(m1,m2){
//   var arr = [...m1,...m2].sort(function(a,b){return a-b});
//   if(arr.length%2==0){
//     var mid1 = arr[arr.length/2];
//     var mid2 = arr[arr.length/2-1];
//     return((mid1+mid2)/2); 
//   }
//   else{
//     return (arr[Math.floor(arr.length/2)]);
//   }
// };
// console.log(median(m1,m2));

// //IIFE Function
// var m1 = [1,111,24,38,93];
// var m2 = [202,76,65,501,41];
// (function median(m1,m2){
//   var arr = [...m1,...m2].sort(function(a,b){return a-b});
//   if(arr.length%2==0){
//     var mid1 = arr[arr.length/2];
//     var mid2 = arr[arr.length/2-1];
//     console.log((mid1+mid2)/2); 
//   }
//   else{
//     console.log(arr[Math.floor(arr.length/2)]);
//   } 
// })(m1,m2);

// //Anonymous Function
// var arr7=[1,6,4,2,2,8];
// var temp=[];
// var org=function(arr7){
//   for(var i=0;i<arr7.length;i++){
//     var count=0;
//     for(var j=0;j<arr7.length;j++){
//       if(arr7[i]==arr7[j]){
//         count++;
//       }
//     }
//     if(count<=1){
//        temp.push(arr7[i]);
//     }
//   }
//   return(temp);  
// };
// console.log(org(arr7));

// //IIFE Function
// var arr7=[1,6,4,2,2,8];
// var temp=[];
// (function(arr7){
//   for(var i=0;i<arr7.length;i++){
//     var count=0;
//     for(var j=0;j<arr7.length;j++){
//       if(arr7[i]==arr7[j]){
//         count++;
//       }
//     }
//     if(count<=1){
//        temp.push(arr7[i]);
//     }
//   }
//   console.log(temp);  
// }
// )(arr7);