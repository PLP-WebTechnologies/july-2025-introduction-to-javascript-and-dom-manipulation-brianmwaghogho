// Part 1: Variables & Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value; // Variable declaration
  let result = "";

  if (age >= 18) { // Conditional check
    result = "✅ You are an adult!";
  } else if (age > 0) {
    result = "👶 You are a minor!";
  } else {
    result = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result;
}

// Part 2: Functions
function showGreeting(name) {
  document.getElementById("greeting").textContent = "Hello, " + name + "! 👋";
}

function calculateTotal(price, quantity) {
  let total = price * quantity; // simple calculation
  document.getElementById("totalResult").textContent = "Total: $" + total;
}

// Part 3: Loops
function listNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear before adding
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }
}

function countdown(start) {
  let result = "";
  let i = start;

  while (i > 0) {
    result += i + "... ";
    i--;
  }
  result += " Go!";
  document.getElementById("countdownResult").textContent = result;
}

//  Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("intro").textContent = "✨ The intro text has been changed dynamically!";
});

document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New List Item " + (document.getElementById("dynamicList").children.length + 1);
  document.getElementById("dynamicList").appendChild(newItem);
});

// Extra CSS for toggle background
document.head.insertAdjacentHTML("beforeend", `
  <style>
    .dark-mode { background-color: black; color: white; }
  </style>
`);
