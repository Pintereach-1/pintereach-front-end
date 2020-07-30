import React, { useEffect } from 'react'


// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getArticles } from '../../store/actions'
import { useParams } from 'react-router-dom'


export const CategoryDetail = () => {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles)
     const {id} = useParams()
    

console.log("ARTICLES",articles)
    useEffect(() => {
        dispatch(getArticles(id))
        // eslint-disable-next-line
        }, [id])
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
