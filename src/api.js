import axios from "axios";

const newsApi = axios.create({ baseURL: 'https://news-api-1vbb.onrender.com/api' })

export const getArticles = (topic, sort_by, order) => {

    let queries = []
    if (topic) {
        queries.push(`topic=${topic}`);
    }
    if (sort_by) {
        queries.push(`sort_by=${sort_by}`);
    }
    if (order) {
        queries.push(`order=${order}`);
    }

    let queryString = '';
    if (queries.length > 0)
    {
        queryString = `?${queries.join('&')}`
    }

    return newsApi.get(`/articles${queryString}`)
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

export const addNewComment = (articleId, username, newComment) => {
    const postedComment = {
        "username": username,
        "body": newComment
    }

    return newsApi.post(`articles/${articleId}/comments`, postedComment)
        .then((res) => {
            return res.data.comment
        })
}

export const getAllTopics = () => {
    return newsApi.get('/topics')
        .then((res) => {
            return res.data.topics
        })
}
