/* 1. Write a function called ‘isString’ that receives 2 arguments,
a string and a callback function. The function checks that
the string is indeed a string. If the string is a string, pass
the string to a callback function that logs that string to the
console
*/
function logToConsole(text) {
  console.log(text);
}
function isString(text, logger) {
  if (typeof text === "string") {
    logger(text);
  }
}
isString("hello", logToConsole);
isString(true, logToConsole);
isString(1656, logToConsole);
isString("26516", logToConsole);
/* 
2. Create a function called ‘firstWordUpperCase’ that
receives 2 arguments, a string and a callback function.
The function will capitalize the first word in the sentence
and pass the string to a callback function which will create
dashes between the words.
*/
function putDashes(textArray) {
  return textArray.join("-");
}
function firstWordUpperCase(sentence, callback) {
  // capitalize first word
  let words = sentence.split(" ");
  let first = words[0];
  words[0] = first.charAt(0).toUpperCase() + first.slice(1);
  // create dashes
  text = putDashes(words);
  return text;
}
console.log(firstWordUpperCase("this sentence is boring", putDashes));
