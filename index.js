/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  // convert string to number
  let time = parseInt(string);
  if (time < 12) {
    return "Good Morning";
  } else if (time > 17) {
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;
}