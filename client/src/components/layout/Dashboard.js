import React, { useEffect, useState } from "react";
import { CategoryForm } from "../categories/CategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getBoards, deleteBoard, editBoard } from "../../store/actions";
import { CategoryCard } from "../categories/CategoryCard";
// import { EditCategory } from "../categories/EditCategory";
import { useParams } from "react-router-dom";




export const Dashboard = () => {
  const [eiditng, setEditing] = useState(false)
  const [category, setCategory] = useState([])
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

          return (

            <div className="" key={category.categoryid}>

              {/* <i className="fas fa-clipboard-list" id="board-icon" /> */}
              <CategoryCard category={category} />

              {(
                <form onSubmit={() => dispatch(editBoard(category.categoryid))}>
                  <legend>edit category</legend>
                  <label>
                    Category
      <input
                      onChange={e => setInputEdit({ ...inputEdit, name: e.target.value })}
                      value={inputEdit.category}
                    />
                  </label>

                  <div>
                    <button type="submit">save</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                  </div>
                </form>
              )}
              <button
                className=""
                onClick={() => dispatch(deleteBoard(category.categoryid))}
              >
                Delete Board
                </button>
              {/* <button
                className=""
                onClick={() => editCategory(category.categoryid)}
              >
                Edit
                </button>
              <button
                className=""
                onClick={}
              > */}
              {/* Save Change
                </button> */}

            </div>
          );
        })}
      </div>
    </div>
  );
}


