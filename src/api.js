import axios from "axios";

const newsApi = axios.create({ baseURL: 'https://news-api-1vbb.onrender.com/api' })

export const getArticles = () => {
    return newsApi.get('/articles')
        .then((res) => {
            return res.data.articles;
        })
}

export const getArticleById = (articleId) => {
    return newsApi.get(`/articles/${articleId}`)
        .then((res) => {
            return res.data.article;
        })
}

export const getArticleComments = (articleId) => {
    return newsApi.get(`articles/${articleId}/comments`)
        .then((res) => {
            return res.data.comments;
        })
}

export const updateArticleVotes = (articleId, increment) => {
    const updatedRequestBody = {
        inc_votes: increment
    }

    return newsApi.patch(`/articles/${articleId}`, updatedRequestBody)
        .then((res) => {
            return res.data.article
        })
}