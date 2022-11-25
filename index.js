// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
const names = ["Charlie", "Samip", "Ali"];
function writeCards(names) {
    let i = 0;
    while (i < names.length) {
    console.log(`Thank you, ${names[i]} for the wonderful birthday gift!`);
    i++;
}
return writeCards;
}