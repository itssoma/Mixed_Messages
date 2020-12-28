// Чарвис
// Mixed Messages - Russian Remix
// December 2020

//Possesive Pronoun Arrays
//first index of the array is russian, the second English, and the third is the gender.
//in this practice program we only will work with femanine and masculine subjects and nouns
var pos = [['Мой','My','m'],['Моя','My','f'],['Его','His','0'],['Её','Her','0']];

//Subject Array
//first index of the array is russian, the scond Eglish, and the third is the gender of the subject.
var subj = [['собака','dog','f'],['профессор','professor','m'],['сестра','sister','f'],['брат','brother','m']];

//Adjectives Array the first index is the masculine version, the second 
var adj = [['хороший.','хорошая.','is good.'],['устал.','устала.','is tired.'],['крепкий.','крепкая.','is tough.'],['толстый.','толстая.','is fat.']];

// arrays that will capture the output settings.
var sentence = [];
sentence.push(pos[Math.floor(Math.random() * pos.length)]);
sentence.push(subj[Math.floor(Math.random() * subj.length)]);

//while loop to ensure the correct 'My' is used based on the subjects gender.
while(sentence[1][2] != sentence[0][2] && sentence[0][2] != '0')
{
    sentence.pop();
    sentence.push(subj[Math.floor(Math.random() * subj.length)]);
}
sentence.push(adj[Math.floor(Math.random() * adj.length)]);

// arrays to store the generated sentence. one for russian and another from english.
var ru_sentence = [sentence[0][0],sentence[1][0]];
var eng_sentence = [sentence[0][1],sentence[1][1],sentence[2][2]];

// determining which adjective spelling to choose based on the subjects gender type
if(sentence[1][2] === 'm')
{
    ru_sentence.push(sentence[2][0]);
}
else
{
    ru_sentence.push(sentence[2][1]);
}

// printed console statement.
console.log();
console.log();
console.log("---------- RANDOM MESSAGE -----------");
console.log("Russian Sentence: " + ru_sentence.join(' '));
console.log('-------------------------------------');
console.log("English Equivalent: " + eng_sentence.join(' '));
console.log();
console.log();