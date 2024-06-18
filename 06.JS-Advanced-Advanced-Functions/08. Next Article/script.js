function getArticleGenerator(articles) {
    return function() {
        if (articles.length > 0) {
            const contentDiv = document.getElementById('content');
            const article = document.createElement('article');
            article.textContent = articles.shift();
            contentDiv.appendChild(article);
        }
    };
}