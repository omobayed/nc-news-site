import Moment from 'moment';

const ArticleCard = ({ article }) => {

    return (
        <div className="article-card">
            <img src={article.article_img_url} alt="image" />
            <div className="details">
                <a href={`/article/${article.article_id}`}>
                    <p><strong>{article.title}</strong></p>
                </a>
                <span><i>By {article.author}</i></span><br/>
                <span><i>About: {article.topic}</i></span><br/>
                <span><i>Created at: {Moment(article.created_at).format('yyyy-MM-DD')}</i></span>
            </div>
        </div>
    )
}

export default ArticleCard