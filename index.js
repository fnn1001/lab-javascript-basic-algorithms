// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

let hacker1 = "Feras";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "asdfasdf";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}


for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1.charAt(i).toUpperCase());
}
for (let i = hacker1.length; i >= 0; i--) {
  console.log(hacker1.charAt(i));
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const index1 = alphabet.indexOf(hacker1[0].toLowerCase());
const index2 = alphabet.indexOf(hacker2[0].toLowerCase());

if (index1 < index2) {
  console.log("The driver's name goes first.");
} else if (index1 > index2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod mi ac lorem eleifend, in gravida eros malesuada. Morbi varius facilisis mauris non eleifend. Quisque eget commodo justo. Sed ac nunc a ex tincidunt malesuada. In hac habitasse platea dictumst. Vestibulum eleifend eros et libero ultricies, vel semper lectus iaculis. Duis id posuere mi. Donec sagittis magna sed orci fringilla, at lobortis nulla tempus.
Nullam lobortis luctus lectus in ullamcorper. Pellentesque ultrices, lorem sed vulputate pretium, sem nibh fermentum enim, a lobortis neque felis vel mauris. Vivamus vitae odio dignissim, bibendum sapien ut, vestibulum arcu. Curabitur pharetra consectetur tortor, in consectetur enim maximus vel. Nunc tincidunt, nulla vel pellentesque fermentum, orci urna facilisis massa, et elementum enim justo a nibh. Sed tristique justo non dui varius, non aliquet sapien suscipit.

Aenean sit amet facilisis urna. Mauris tristique condimentum purus, eu aliquam lectus dapibus nec. Sed non mauris nisl. Vestibulum bibendum urna non dolor commodo, id facilisis felis ullamcorper. Nullam malesuada fermentum ex, sit amet lobortis est auctor vitae. Fusce faucibus mollis odio, nec eleifend tortor vestibulum et. Integer et nisi elementum, efficitur lectus eget, rutrum velit. Nullam eget ex volutpat, bibendum odio id, cursus justo. et et et et et et et et 
`;

const wordsArray = longText.split(" ");
const numberOfWords = wordsArray.length;

console.log(numberOfWords);

const wordsArray2 = longText.split(" ");
let count = 0;

for (let i = 0; i < wordsArray2.length; i++) {
  if (wordsArray2[i] === "et") {
    count++;
  }
}

console.log(`The word "et" appears ${count} times.`);




let phraseToCheck = "Hello World";
let wordBackwards = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  wordBackwards += phraseToCheck[i].toLowerCase();
}

console.log(wordBackwards);


