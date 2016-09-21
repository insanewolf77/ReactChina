// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) =>{
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Andrew'));




function add(a,b){
  return a+b;
}

// function addStatement

 var addExpression = (a,b) => a + b;
 var addStatement = (a,b) =>{
   return a + b;
 };


console.log(add(1,3));
console.log(addStatement(1,5));
console.log(addExpression(5,7));
