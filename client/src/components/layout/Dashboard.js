import React, { useEffect } from "react";
import { CategoryForm } from "../categories/CategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getBoards, deleteBoard } from "../../store/actions";
import { CategoryCard } from "../categories/CategoryCard";
// import { useParams } from "react-router-dom";
// import { SingleBoard } from "../board/SingleBoard";


export const Dashboard = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.boards)
  // const { id } = useParams()

  useEffect(() => {
    dispatch(getBoards())

    // eslint-disable-next-line
  }, [])


  return (
    <div className="">
      <div className="">
        <CategoryForm />
      </div>

      <div className="">


        {categories.map(category => {
          return (
            <div className="" key={category.categoryid}>

              {/* <i className="fas fa-clipboard-list" id="board-icon" /> */}
              <CategoryCard category={category} />

              <button
                className=""
                onClick={() => dispatch(deleteBoard(category.categoryid))}
              >
                Delete Board
                </button>
              <button
                className=""
              // onClick={() => dispatch(editBoard(category.categoryid))}
              >
                Edit Board
                </button>
            </div>

          );
        })}
      </div>
    </div>
  );
}


