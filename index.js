// Assignment 1: writeCards()
function writeCards(names, event) {
  let messages = []; // new array to hold thank-you messages
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

// Assignment 2: countDown()
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--; // decrement to move toward loop exit
  }
}

