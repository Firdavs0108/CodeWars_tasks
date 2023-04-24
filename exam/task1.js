

//////4

// let str= '12+2+3+4'

// console.log(eval('12+2+3+4'));



///6

// function getNumber(a=0, b=1){
//     return b
// }

// console.log(getNumber(3) * 3);



///8

// var x 

// if(!x){
//     console.log( x ? 'webbrain' : 'academy');
// } if(x) {
//     console.log(!x ? 'IT' : 'academy');
// } else {
//     console.log('webbrain it academy');
// }



//////10


// let key = [1,2,3,3,3,4,5,6,6]

// let unique = key.filter((value, index, array) => array.indexOf(value) === index) 
    
// console.log(unique);






///11

// console.log(`${2} + ${2}`);


// ////12
// console.log(`${2} + ${2}` * 3);



/////18

// for(let i of obj){
//     console.log(i);
// }




////19

// const obj = {
//     name: 'Webbrian',
//     surname: 'Acs',
//     status: 'abs',
// }

// Object.values(obj).map(([value,key], index) => {
//     console.log(value);
// })

// for(let i of obj){
//     console.log(i);
// }



/////14

// let array = [11, 10, 1];
// let result = true;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 100) {
//      result = false;
//   }
// }
// console.log(result)


// let array = [11, 10, 22];
// let result = true;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 100) {
//     result = false;
//   }
// }

// console.log(result);



// function Numberarray(array){
    
//     let result = true;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 100) {
//     result = false;
//     break;
//   }
//   console.log(result);
// }

// }
// // console.log(Numberarray[10,20,20,50]);
// Numberarray([10,20,30])




////23

 
// var students = [
//   {
//       name: 'David',
//       age: 12
//   },
//   {
//       name: 'Daniel',
//       age: 13
//   },
//   {
//       name: 'Alex',
//       age: 10
//   }
// ];

// let filtered = []

// let name = (index) => {
// for (let i of students ) {
//   if (i.name.includes (index))
//   {
//       filtered.push(i);
//   }
// } 

// }

// name("l")
// console.log(filtered);








var students = [
  {
      name: 'David',
      age: 12
  },
  {
      name: 'Daniel',
      age: 13
  },
  {
      name: 'Alex',
      age: 10
  }
];

let count = []

let name = (input) => {

for(let i of students) {
  if(i.name.includes (input))

{
  count.push(i)
}
}
}

name('e')
console.log(count);