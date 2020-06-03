fs = require('fs');

function phonenumber(err, data) {
  console.log('data:', data);
}

fs.readdir('../Documents/Java', phonenumber);

console.log("this comes after");
