
const ArticleCard = ({ article }) => {

    return (
        <div className="article-card">
            <img src={article.article_img_url} alt="image" />
            <div className="details">
                <p><strong>{article.title}</strong></p>
                <span>By {article.author}</span><br/>
                <span>About: {article.topic}</span><br/>
                <span style={{textAlign:"right"}}><a href="">View Article</a></span>
            </div>
        </div>
    )
}

export default ArticleCard