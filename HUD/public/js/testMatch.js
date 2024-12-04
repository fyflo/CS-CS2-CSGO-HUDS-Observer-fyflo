const fs = require('fs');

// read JSON object from file
fs.readFile('user.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    const user = data.toString();

    // print JSON object
    console.log(user);
});

update(user);