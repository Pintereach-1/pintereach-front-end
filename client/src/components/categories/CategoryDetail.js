import React, { useEffect } from 'react'


// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getArticles } from '../../store/actions'


export const CategoryDetail = () => {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles)
    
    

console.log("ARTICLES",articles)
    useEffect(() => {
        dispatch(getArticles())
        // eslint-disable-next-line
        }, [])
    return (
        <div>
    

            {/* {articles.map(article => {
                return (
                    
                    <div key={article.articleid}>
                        <h3>Title: {article.title}</h3>
                        <p>Topic: {article.description}</p>
                        <Link to={article.imageUrl}>{article.imageUrl}</Link>
                    </div>
                )
            })}  */}


        </div>
    )
}
