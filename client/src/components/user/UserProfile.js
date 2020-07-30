import React from 'react'
import { NavLink } from 'react-router-dom'

export const UserProfile = () => {
    return (
        <div>
            <h1>Welcome John Snow</h1>
            <NavLink to="/dashboard">Get Articles</NavLink>
        </div>

        
    )
}
