import React from 'react'
import { Link } from 'react-router-dom'

export const CategoryCard = (props) => {

    console.log("Category Card", props.category.categoryid)



    return (
        <Link to={`/dashboard/${props.category.categoryid}`}>
            <div>
                <h1>{props.category.categoryName}</h1>

            </div>
        </Link>
    )
}
