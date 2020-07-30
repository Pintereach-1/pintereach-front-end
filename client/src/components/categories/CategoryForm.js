import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { postBoard } from '../../store/actions'



export const CategoryForm = () => {
const { register, handleSubmit, getValues} = useForm({
    mode: 'onSubmit',
    defaultValues: {}, 
})   
const dispatch = useDispatch()

const onSubmit = () =>{
dispatch(postBoard(getValues()))
}


return (
        <div>
            <form onSubmit= {e =>{
                handleSubmit(onSubmit)(e);
            }}>
                <input 
                name="categoryName"
                placeholder="Describe Category"
                ref={register}
                />
    
                <button>Submit</button>
            </form>
        </div>
    )
}

