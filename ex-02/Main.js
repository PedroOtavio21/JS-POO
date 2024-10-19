const Author = require('./Author');

const pedro = new Author('Pedro');

const post = pedro.createPost('Primeiro projeto Dev', 'Lorem ipsun dolor ...');

post.addComment('Ana', 'Blablabla');
post.addComment('João', 'Blebleble');

console.log(pedro)
console.log(post)