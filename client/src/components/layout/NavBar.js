import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <div className="">
            <div className="">
                {" "}
                <i className="" />
                <div className="">
                    <h1>Pintereach</h1>
                </div>
            </div>

            <div>
                <NavLink className="" to="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink className="" to="/user">
                    Profile
                </NavLink>
                <NavLink className="" to="/login">
                    Logout
                </NavLink>

            </div>
        </div>
    )
}
