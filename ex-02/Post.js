const Comment = require('./Comment');

class Post{
    constructor(title, content, author){
        this.title = title;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    addComment(username, text){
        this.comments.push(new Comment(username, text));
    }
}

module.exports = Post; 