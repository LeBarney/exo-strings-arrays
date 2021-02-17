const phraserandom = "Bonjour, je suis Sofiane.";

console.log(phraserandom);
const test = phraserandom.split(" ");

for (let i = 0; i < phraserandom.length; i++) {
  if (test[i] === "Sofiane") {
   test[i] = "Barnabé"
  }
}
console.log(test)
