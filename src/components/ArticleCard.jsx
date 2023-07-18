
const ArticleCard = ({ article }) => {

    return (
        <div className="article-card">
            
                <img src={article.article_img_url} alt="image" />
        
                <p><strong>{article.title}</strong></p>
                <span>Author: {article.author}</span>
                <a> View Article</a>
        </div>
    )
}

export default ArticleCard