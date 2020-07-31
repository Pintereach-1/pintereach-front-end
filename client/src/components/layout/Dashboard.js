import React, { useEffect, useState } from "react";
import { CategoryForm } from "../categories/CategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getBoards, deleteBoard, editBoard } from "../../store/actions";
import { CategoryCard } from "../categories/CategoryCard";
import { EditCategory } from "../categories/EditCategory";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
// import { SingleBoard } from "../board/SingleBoard";


export const Dashboard = () => {
  const [eiditng, setEditing] = useState(false)
  const [inputEdit, setInputEdit] = useState({
    categoryName: ''
  })
  const categories = useSelector(state => state.boards)
  const dispatch = useDispatch()
  const { id } = useParams()



  const editCategory = category => {
    setEditing(true);
    setInputEdit(category);
  };

  const saveEdit = () => {
    dispatch(editBoard(categories.categoryid))
    setEditing(false)
  }



  useEffect(() => {
    dispatch(getBoards(id))

    // eslint-disable-next-line
  }, [id])



  return (
    <div className="">
      <div className="">
        <CategoryForm />
      </div>

      <div className="">
        {categories.map(category => {
          // console.log("Categories State", category.articles)
          if (eiditng === true) {
            return (
              <EditCategory
                key={category.categoryid}
                category={category}

              />
            );
          }
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
                onClick={() => dispatch(editBoard(category.categoryid))}
              >
                Save Change
                </button>
            </div>

          );
        })}
      </div>
    </div>
  );
}


