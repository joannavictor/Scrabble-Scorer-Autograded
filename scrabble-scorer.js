// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
let scrabbleWord;
let scrabbleScorer = function(word) {
	word = word.toLowerCase();
	 let points = 0;
    let newPointStructure = transform(oldPointStructure);
    for (let i = 0; i < word.length; i++) {
        for (const keyWord in newPointStructure) {
               if (keyWord == (word[i])) {
                    points += parseInt(newPointStructure[keyWord]);
           }
          }
        }
     return points;
   };
/*let scrabbleScorer = function(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
   let points = 0;
   
	for (let i = 0; i < word.length; i++) {
     
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
	//		letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
         points += parseInt(pointValue);
         }
 	  }
	}
	console.log(letterPoints = `Score for '${word}': ${points}`);
   return letterPoints;
 }*/

let simpleScorer = function(simpleScore){
   let store = 0;
   simpleScore = simpleScore.toUpperCase();
   	for (let i = 0; i < simpleScore.length; i++) {
           store = i + 1;
           }
      console.log(`Score for '${scrabbleWord}': ${store}`);
      return store;

  } 

let vowelBonusScorer = function(vowelScore){
   let store1 = 0;
   let vowels = ['A', 'E', 'I', 'O', 'U'];
   vowelScore = vowelScore.toUpperCase();
		for (let i = 0; i < vowelScore.length; i++) {
            if (vowels.includes(vowelScore[i] ) === true) {
               store1 = store1 + 3
             }
             else { store1 = store1 + 1 }
          }
        console.log(`Score for '${scrabbleWord}': ${store1}`);
        return store1;

  } 

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
   scrabbleWord = input.question("Enter a word to score: ");
};

let simpleScoring = { 
   name:'0 - Simple Score',
   description:'One point per character',
   scorerFunction: simpleScorer
};
 let vowelBonusScoring = {
   name:'1 - vowelBonus Score',
   description:'Vowels are worth 3 points',
   scorerFunction: vowelBonusScorer
 };
 let scrabbleScoring = {
   name:'2 - Scrabble Score',
   description:'Uses scrabble point system',
   scorerFunction: scrabbleScorer
 };



const scoringAlgorithms = [simpleScoring,vowelBonusScoring,scrabbleScoring];

function scorerPrompt() {
   console.log("                                              ");
   console.log("Which scoring algorithm would you like to use?");
   for (i=0;i<scoringAlgorithms.length;i++){
      console.log(`${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
   };
   console.log("                                              ");
   let scorerPrompt = input.question("Enter 0, 1, or 2: ");
   if (scorerPrompt == 0){ 
      console.log("Algorithm Name: ", scoringAlgorithms[0].name);
      console.log("Scoring Function Result: ", scoringAlgorithms[0].scorerFunction(scrabbleWord));
   }
   else if (scorerPrompt == 1){ 
      console.log("Algorithm Name: ", scoringAlgorithms[1].name);
      console.log("Scoring Function Result: ", scoringAlgorithms[1].scorerFunction(scrabbleWord));
   }
   else if (scorerPrompt == 2){ 
      console.log("Algorithm Name: ", scoringAlgorithms[2].name);
      console.log("Scoring Function Result: ", scoringAlgorithms[2].scorerFunction(scrabbleWord));
   }
}

  function transform(oldToNew) {

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let objectVar = {};
    let caseConv;
    for (let i = 0; i < alpha.length; i++) {
         for (const pointValue in oldToNew) {
            if (oldToNew[pointValue].includes(alpha[i])) {
                caseConv = alpha[i];
                caseConv = caseConv.toLowerCase();
                objectVar[caseConv] = parseInt(pointValue);
                }
        } 
     } return objectVar;
 };

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
