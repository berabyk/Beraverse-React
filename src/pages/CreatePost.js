import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(13).required(),
    });

    const onSubmit = async (data) => {
        const response = await axios.post('/posts', data);
        console.log(response);
    };

    return (
        <div className='flex flex-col items-center mt-10'>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='flex flex-col'>
                    <div className='flex flex-col border-2 border-slate-600 rounded m-3 w-96 shadow-md shadow-slate-400 align-middle justify-center'>
                        <Field
                            id='inputCreatePost'
                            name='title'
                            placeholder='Beautiful Day'
                            className='text-3xl font-bold text-white bg-slate-600 p-1 text-center'
                        />
                        <ErrorMessage name='title' component={'span'} className='text-red-700 ms-1' />

                        <Field
                            id='inputCreatePost'
                            name='postText'
                            placeholder="(Ex. It's so beautiful day...)"
                            as='textarea'
                            rows='4'
                            className='p-3 text-justify'
                        />
                        <ErrorMessage name='postText' component={'span'} className='text-red-700 ms-1' />


                        <div className='text-sm bg-slate-600 text-white p-1'>
                            <span>@</span>
                            <Field
                                id='inputCreatePost'
                                name='username'
                                placeholder='username'
                                className='bg-slate-600'
                            />
                        </div>
                        <ErrorMessage name='username' component={'span'} className='text-red-700 ms-1' />

                    </div>


                    <button type='submit' className='pr-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm px-4 py-2 text-center w-fit self-center my-1'>Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost;