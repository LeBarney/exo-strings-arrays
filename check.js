const phrasejavalol = "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript";

console.log(phrasejavalol);
const test = phrasejavalol.split(" ");

for (let i = 0; i < phrasejavalol.length; i++){
  if (test[i] === "Javascript"){
    console.log("il y a bien le mot Javascript dans la phrase")
  }
}
