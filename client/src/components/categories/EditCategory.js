import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { editBoard } from '../../store/actions'

export const EditCategory = () => {
    const { register, handleSubmit, getValues} = useForm({
        mode: 'onSubmit',
        defaultValues: {}, 
    }) 
    const dispatch = useDispatch()
    
    const onSubmit = () =>{
        // dispatch(editBoard(getValues()))
        }
       
       
        // useEffect(() => {
           
        // }, [])

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
