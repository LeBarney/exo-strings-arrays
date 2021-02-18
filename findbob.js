const phrase = "Bob caca boudin prout ";
let isbob = false

console.log(phrase);
const phraseCheck = phrase.split(" ");

for (let i = 0; i < phrase.length; i++) {
  if (phraseCheck[i] === "Bob") {
    isbob = true
    break
  }
}

if(isbob) {
  console.log("il y a bob dans la phrase")
}
else {
  console.log("il n'y a pas de bob")
}
