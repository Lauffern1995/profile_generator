const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let surveyAnswers = [];

rl.question('What is your name? ', (answer) => {
  surveyAnswers.push(answer);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    surveyAnswers.push(answer);

    rl.question('What do you listen to while doing that? ', (answer) => {
      surveyAnswers.push(answer);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        surveyAnswers.push(answer);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          surveyAnswers.push(answer);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            surveyAnswers.push(answer);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              surveyAnswers.push(answer);

              console.log(`Thank you for taking my survey ${surveyAnswers[0]}!\n \r${surveyAnswers[0]} loves ${surveyAnswers[1]} and listening to ${surveyAnswers[2]} while doing it. ${surveyAnswers[0]} also is obessed with ${surveyAnswers[3]} and always orders ${surveyAnswers[4]}. Will never miss a game of ${surveyAnswers[5]}. Also did I mention ${surveyAnswers[0]}'s superpower is ${surveyAnswers[6]}?`);

              rl.close();
            });
          });
        });
      });
    });
  });
});