import React, { useEffect } from 'react'

import { getUserInfo } from "../../store/actions";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';





export const UserProfile = () => {
    const data = useSelector(state => state.username)
    const loading = useSelector(state => state.isLoading)

    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getUserInfo())
    }, [])



    //     avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
    // email: "george.bluth@reqres.in"
    // first_name: "George"
    // id: 1
    // last_name: "Bluth"

    // console.log(data)


    if (loading === true) {
        return <div>...Loading</div>
    } else {
        console.log("Data From API", data)
        return (
            <div>
                <div className="">
                    <div className="">
                        <h4>First Name:</h4><h2>{data.first_name}</h2>
                        <h4>Last Name:</h4><h2>{data.last_name}</h2>

                    </div>

                    <NavLink exact to="/editUser">
                        <div className=""><button className="">Edit User</button></div>
                    </NavLink>
                </div>
            </div>
        )
    }


}


