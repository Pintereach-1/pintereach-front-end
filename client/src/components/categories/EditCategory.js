import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { editBoard, getBoards } from '../../store/actions'
import { useParams } from 'react-router-dom'

export const EditCategory = () => {
    const { register, handleSubmit, getValues} = useForm({
        mode: 'onSubmit',
        defaultValues: {}, 
    }) 
    const dispatch = useDispatch()
    const {id} = useParams()

    const onSubmit = () =>{
        dispatch(editBoard(getValues()))
        }
      
        useEffect(() => {
           dispatch(getBoards(id))
        }, [id])

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

            
        </form>
    </div>
    )
}
