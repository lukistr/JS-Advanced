function forumPostManager(post, action) {
    if (action === 'upvote') {
        post.upvotes++;
    } else if (action === 'downvote') {
        post.downvotes++;
    } else if (action === 'score') {
        const totalVotes = post.upvotes + post.downvotes;
        const balance = post.upvotes - post.downvotes;

        let obfuscatedUpvotes = post.upvotes;
        let obfuscatedDownvotes = post.downvotes;

        if (totalVotes > 50) {
            const maxVotes = Math.max(post.upvotes, post.downvotes);
            const obfuscationFactor = Math.ceil(maxVotes * 0.25);
            obfuscatedUpvotes += obfuscationFactor;
            obfuscatedDownvotes += obfuscationFactor;
        }

        let rating;
        if (totalVotes < 10) {
            rating = 'new';
        } else if (post.upvotes > (totalVotes * 2 / 3)) {
            rating = 'hot';
        } else if (balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }

        return [obfuscatedUpvotes, obfuscatedDownvotes, balance, rating];
    }
}

let forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

forumPostManager(forumPost, 'upvote');
console.log(forumPostManager(forumPost, 'score'));

let post = {
    id: 1,
    author: "John Doe",
    content: "Hello, world!",
    upvotes: 50,
    downvotes: 50
};

forumPostManager(post, 'upvote');
forumPostManager(post, 'downvote');
console.log(forumPostManager(post, 'score')); // Example output: [63, 63, 0, "controversial"]

forumPostManager(post, 'upvote');
console.log(forumPostManager(post, 'score')); // Example output: [64, 63, 1, "controversial"]
