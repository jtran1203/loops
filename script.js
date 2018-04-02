var flavor = "vanilla";
var vessel = "cone";
var toppings = "peanuts";

if (flavor === "vanilla" || "chocolate"){
  if (vessel === "cone" || "bowl"){
    if (toppings === "sprinkles" || "peanuts"){
      console.log("I'd like two scoops of "+ flavor + "ice cream in a " + vessel + " with " + toppings);
    }
  }
}

//problem #2

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number

var x =1;
while(x<=20){
  if(x%3 ===0 && x%5 ===0){
    console.log("JuliaJames");
  }
  else if (x%3 ===0){
    console.log("Julia");
  }else if(x%5===0){
    console.log("James");
  }
      else {
    console.log(x);
  }
  x++;
   }

  // problem 3

  // 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
  // 98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
  // ...
  // 2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
  // 1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!



  var num = 99;
  while(num>=1){
    if(num===2){
      console.log(num + " bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ (num-1)+ " bottle of juice on the wall!");
    }else if(num===1){
      console.log(num +" bottle of juice on the wall! "+ num + " bottle of juce! Take one down, pass it around... " + (num-1)+ " bottle of juice on the wall");
    }else{
    console.log(num + " bottles of juice on the wall! " + num + " bottlees of juice! Take one down, pass it around..." + (num -1) + " bottles of Juice!" );
    }
    num--;
  }

// problem 4


// Write a while loop that counts down from 60 seconds and:
//
// If there's a task being completed, it prints out the task
// If there is no task being completed, it prints out the time as T-x seconds
// Use the task and time descriptions described above.

var x= 60;
while(x>=0){
  if(x===50){
    console.log("Orbiter transfer from ground to internal power"+ " T-" + x + "seconds");
  }else if(x===31){
    console.log("Ground launch sequencer is go for auto sequence start" + " T-" + x + "seconds");
  }else if (x===16){
    console.log("Activate main engine hydrogen burnoff system" + " T-" + x + "seconds");
  }else if (x===0){
    console.log("Solid Rocket booster ignition and liftoff!" + " T-" + x + "seconds");
  }else{
    console.log("T-" + x + "seconds");
  }
  x--;
}
