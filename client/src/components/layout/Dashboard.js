import React, { useEffect } from "react";
import {Link } from "react-router-dom";
import { BoardForm } from "../board/BoardForm";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../store/actions";


export const Dashboard = ({}) =>{
const dispatch = useDispatch()
const categories = useSelector(state => state.boards)

  useEffect(() => {
  dispatch(getBoards())
  // eslint-disable-next-line
  }, [])

    return (
      <div className="">
        <div className="">
          <BoardForm />
        </div>
    
        <div className="">
        
          {categories.map(category => {
            return (
              <Link to={`board/${category.categoryid}`} key={category.categoryid}>
              <h1>{category.categoryName}</h1>
              </Link>
            
            );
          })}
        </div>
      </div>
    );
  }


