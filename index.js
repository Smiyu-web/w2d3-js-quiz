// let die1 = Math.floor(Math.random() * 6) + 1;
// console.log(die1);

// let die1 = rollDie();

// function singSong() {
//   console.log("DO");
//   console.log("RE");
//   console.log("MI");
// }

// singSong();

function greet(person) {
  console.log(`Hi, ${person}!`);
}


function add(x, y) {
  // return a + b;
  // console.log("End of function");

  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  } 
  return x + y;
}