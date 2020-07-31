import React, { useEffect } from 'react'


import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getArticles } from '../../store/actions'
import { useParams } from 'react-router-dom'
import { ArticleForm } from '../article/ArticleForm'

export const CategoryDetail = () => {
    const dispatch = useDispatch()
    const articles = useSelector(state => state.articles)
     const {id} = useParams()
    
 

useEffect(() => {
    dispatch(getArticles())
    // eslint-disable-next-line
}, [id])

  

return (
    <div>
    
            {
            articles.length > 0 && 
            
            articles.map(article => {
                // console.log("Mapped", id);
                  {
                    return (
                        
                        <div>
                            <ArticleForm />
                            {  (
                                <div key={article.articleid}>
                                    <h3>{article.title}</h3>
                                    <Link to={article.imageUrl}>{article.imageUrl}</Link>
                                </div>
                            )}
                        </div>
                    )
                  }
               
            })} 


        </div>
    )
}
// article.category.categoryid === id &&