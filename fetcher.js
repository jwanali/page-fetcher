const request = require('request');
const fs = require('fs');
const readline = require('readline');
const { exit } = require('process');

const input = process.argv;
const url = input[2];
const destination = input[3];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



request(url, (error, response, body) => {
 // console.log('error:', error); // Print the error if one occurred
 if (error) {

  console.log(`the url ${url} is not valid`);
  console.log(error);
  exit();
 }
fs.access(destination, (error) => {
  //  if any error
  if(error) {
    console.log(`the file path is not valid`);
  }
  if (!error) {
    rl.question(`the ${destination} is already exist would you like to write over it press enter ,if not press N to cancle`,(answer) => {
      if (answer === 'n') {
        rl.close();
      } else fs.writeFile(destination, body, err => {
        if (err) {
          console.error(err);
        }
        console.log(`Downloaded and saved 3261 bytes to ${destination}`);
        rl.close();
        // file written successfully
      });

    })
    

  }


});
  
});

