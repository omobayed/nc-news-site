import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

import { getArticles } from '../api'
import ArticleCard from './ArticleCard'

import Select from "react-select";

const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedSort, setSelectedSort] = useState(searchParams.get('sort_by'));
    const [selectedOrder, setSelectedOrder] = useState(searchParams.get('order'));

    const { topic } = useParams()

    const sortOptions = [
        {
            value: 'created_at',
            label: 'Date'
        },
        {
            value: 'votes',
            label: 'Votes'
        },
        {
            value: 'comment_count',
            label: 'Comment Count'
        }
    ];
    const orderOptions = [
        {
            value: 'asc',
            label: 'Acs'
        },
        {
            value: 'desc',
            label: 'Desc'
        }
    ];

    useEffect(() => {
        setIsError(false);

        getArticles(topic, selectedSort, selectedOrder)
            .then((articles) => {
                setIsLoading(false);
                setIsError(false);
                setArticles(articles)
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log('Load articles error: ', error)
            })
    }, [topic, selectedSort, selectedOrder])

    if (isLoading)
        return <article className="articles-cards"><p>Loading articles...</p></article>

    if (isError)
        return <article className="articles-cards"><p>Error while loading all articles...</p></article>

    return (
        <>
            <div className='sort-form' >
                <label htmlFor="sort">Sort by:</label>
                <div className='sort-select'>
                    <Select
                        options={sortOptions}
                        defaultValue={sortOptions[0]}
                        labelField="label"
                        valueField="value"
                        onChange={(values) => setSelectedSort(values[0].value)} />
                </div>
                <div className='sort-select'>
                    <Select
                        options={orderOptions}
                        defaultValue={orderOptions[1]}
                        labelField="label"
                        valueField="value"
                        onChange={(values) => setSelectedOrder(values[0].value)} />
                </div>
            </div>
            <article className="articles-cards">
                {articles.map((article) => {
                    return (
                        <ArticleCard key={article.article_id} article={article} />
                    )
                })}
            </article>
        </>
    )
}

export default Articles
