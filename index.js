"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"


function exercise1() {
  const namesList = document.getElementById("names-list");
  users.map((character) => {
    console.log(character.name); // print to console

    // add to the list in the DOM
    const li = document.createElement("li");
    li.textContent = character.name;
    namesList.append(li);

  });
}



function exercise2() {
  const list = document.getElementById("young-characters-list");
  // Filter users under age 40
  const youngCharacters = users.filter((character) => character.age < 40);
  // Log and display each
  youngCharacters.map((character) => {
    console.log(character.name);
    const li = document.createElement("li");
    li.textContent = `${character.name}`;
    list.append(li);
  });
}

// Reusable function to render names to any list by ID
function renderCharacterNames(array, listId) {
  const list = document.getElementById(listId);

  array.map((character) => {
    if (!character || !character.name) return;
    const li = document.createElement("li");
    li.textContent = `${character.name}`;
    list.append(li);
  });
}

function exercise3() {
  renderCharacterNames(users, "function-list");
}

// Reusable function to clear a list
function clearList(list) {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

// function that filters by age
function filterByAgeAndRender(array, threshold, listId) {
  const list = document.getElementById(listId);
  const filtered = array.filter((character) => character.age < threshold);
  filtered.forEach((character) => {
    const li = document.createElement("li");
    li.textContent = `${character.name}`;
    list.append(li);
  });
}

// Run Exercise 4 using age threshold 40
function exercise4() {
  filterByAgeAndRender(users, 40, "age-filter-list");
}

// Validation function 
const isValidCharacter = (character) => {
  if (!character || typeof character !== "object") {
    throw new Error("Character must be an object");
  }
  if (!character.name || typeof character.name !== "string") {
    throw new Error("missing name property");
  }
  return true;
};

//Exercise 5 
const MissingName = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, age: 45 }, // Missing name
];
//Check for errors and display them
function exercise5() {
  const errorMessage = document.getElementById("error-messages");
  MissingName.map((character) => {
    try {
      isValidCharacter(character);
      console.log(character.name);
      const list = document.getElementById("error-handling-list");
      const li = document.createElement("li");
      li.textContent = character.name;
      list.append(li);
    }
    catch (error) {
      console.error(`Error: ${error.message}`);
      const div = document.createElement("div");
      div.classList.add("error-message");
      div.textContent = `Error: ${error.message}`;
      errorMessage.append(div);
    }
  });
}

const brokenUsers = [
  { id: 1, age: 23 },
  { id: 2, age: 45 },
  { id: 3, age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 }
];

function exercise6() {
  const brokenArrayUsers = document.getElementById("broken-array-errors");
  brokenUsers.map((character) => {
    try {
      isValidCharacter(character);
      console.log(character.name);
      const list = document.getElementById("broken-array-list");
      const li = document.createElement("li");
      li.textContent = character.name;
      list.append(li);
    }
    catch (error) {
      console.error(`Error: ${error.message}`);

      const div = document.createElement("div");
      div.classList.add("error-message");
      div.textContent = `Error: ${error.message}`;
      brokenArrayUsers.append(div);
    }
  });
};

// Run after DOM loads
window.addEventListener("DOMContentLoaded", () => {
  exercise1(),
    exercise2(),
    exercise3(),
    exercise4(),
    exercise5(),
    exercise6()
});

