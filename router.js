// hello-world.js
console.log("HELLO WORLD");
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, () => {
console.log('Server is running on http://localhost:3000');
});
// file-operations.js
const fs = require('fs');

// Write to a file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
if (err) throw err;
console.log('File created successfully');
});

// Read from a file
fs.readFile('hello.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log('Data from hello.txt:', data);
});
// password-generator.js
const generatePassword = require('generate-password');

function generateRandomPassword() {
const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
});
console.log('Generated Password:', password);
}

generateRandomPassword();
// email-sender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'youssefbenkhadija2007@gmail.com'
    pass: 'youssef2007'
}
});

const mailOptions = {
from: 'youssefbenkhadija2007@gmail.com',
to: 'youssefbenkhadija2007@gmail.com',
subject: 'Test Email',
text: 'This is a test email from Node.js'
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
} else {
    console.log('Email sent: ' + info.response);
}
});
