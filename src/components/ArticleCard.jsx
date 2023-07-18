
const ArticleCard = ({ article }) => {

    return (
        <div className="article-card">
            <div>
                <img src={article.article_img_url} alt="image" />
            </div>
            <div>
                <p><strong>{article.title}</strong></p>
                <span>Author: {article.author}</span>
                <a> View Article</a>
            </div>
        </div>
    )
}

export default ArticleCard