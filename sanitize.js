let phrase = "'\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n'"

let phraseClean = phrase.trim()    // trim permet de "purifier" en enlevant les retours à la ligne disgracieux et autres marques de ponctuation en trop
    phraseClean = phraseClean.toLowerCase()  //toLowerCase permet de tout mettre en minuscule, toUpperCase permet de tout mettre en majuscule

console.log(phraseClean)