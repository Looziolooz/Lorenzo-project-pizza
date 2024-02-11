// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// User Name Entry
let userName = prompt("Please enter your name:", "Joe Biden");
alert(`👋😀 Hello ${userName} nice to see you!`);

// Step 2 - Food choice
// Your code goes here
let mainChoice = prompt(
  `What would you like to order?
  Please choose from:
  1 - Pasta 🍝
  2 - Pizza 🍕 
  3 - Soup 🥣
`);

// Step 3 - Subtype choice
// Your code goes here
let foodCategory;
switch (mainChoice) {
  case "1":
    foodCategory = "Pasta";
    break;
  case "2":
    foodCategory = "Pizza";
    break;
  case "3":
    foodCategory= "Soup";
    break;
  default:
    alert("Invalid choice. Please select a valid number");
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
