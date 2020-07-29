import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import { connect } from "react-redux";

import { NavBar } from "./NavBar";
import { BoardForm } from "../board/BoardForm";

// import axios from 'axios'
import { axiosWithAuth } from "../../utils/axiosWithAuth";

// export const Dashboard = () =>{
//   const [catergories, setCategories] = useState([])
  
// console.log(catergories)

//   useEffect(() => {
//     axiosWithAuth()
//    .get('https://karminer60-pintereach.herokuapp.com/categories/categories')
//    .then(res =>{
//     setCategories(res.data)
//     })
   
//    .catch(err =>{console.log(err)})
//   }, [])
  
    
//   //deleteBoard handle

   
//     return (
//       <div className="">
//         <NavBar />
//         <div className="">
//           <BoardForm />
//         </div>
    
//         <div className="">
//           {catergories.map(category => {
//             return (
//               <div className="" key={category.categoryid}>
//                 <Link
//                   className=""
//                   to={`/dashboard/${category.categoryid}`}
//                   key={category.id}
//                 >
//                   <i className="" id="" />
//                   <h1>{category.categoryName}</h1>
//                 </Link>
//                 <button
//                   className=""
//                   to="/dashboard"
//                 //   onClick={() =>}
//                 >
//                   Delete Board
//                 </button>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }


const mapStateToProps = state => ({
  boards: state.boards,
});

console.log();

export default connect(
  mapStateToProps,
//   { getBoards, deleteBoard, editBoard }
)(Dashboard);
