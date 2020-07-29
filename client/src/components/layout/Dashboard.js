import React, { useEffect } from "react";
// import {Link } from "react-router-dom";
import { connect } from "react-redux";

import { NavBar } from "./NavBar";
import { BoardForm } from "../board/BoardForm";


export const Dashboard = () =>{
  
  
  useEffect(() => {
    // const user_id = localStorage.getItem("user id");
    //getBoards(user_id)
  }, [])
  
    
  //deleteBoard handle

   
    return (
      <div className="">
        <NavBar />
        <div className="">
          <BoardForm />
        </div>
    
        {/* <div className="">
          {boards.map(board => {
            return (
              <div className="" key={board.id}>
                <Link
                  className=""
                  to={`/dashboard/${board.id}`}
                  key={board.id}
                >
                  <i className="" id="" />
                  <h1>{board.board_title}</h1>
                </Link>
                <button
                  className=""
                  to="/dashboard"
                //   onClick={() => deleteBoard(board.id)}
                >
                  Delete Board
                </button>
              </div>
            );
          })}
        </div> */}
      </div>
    );
  }


const mapStateToProps = state => ({
  boards: state.boards,
});

console.log();

export default connect(
  mapStateToProps,
//   { getBoards, deleteBoard, editBoard }
)(Dashboard);
