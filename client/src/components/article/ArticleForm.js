import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { postBoard } from '../../store/actions'



export const ArticleForm = () => {
    const { register, handleSubmit, getValues } = useForm({
        mode: 'onSubmit',
        defaultValues: {},
    })
    const dispatch = useDispatch()

    const onSubmit = () => {
        dispatch(postBoard(getValues()))
    }


    return (
        <div>
            <form onSubmit={e => {
                handleSubmit(onSubmit)(e);
            }}>
                <input
                    name="categoryName"
                    placeholder="Article Title"
                    ref={register}
                />
                <input
                    name="url"
                    placeholder="wwww.example.com"
                    ref={register}
                />

            </form>
        </div>
    )
}

