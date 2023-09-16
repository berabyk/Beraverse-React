import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  let navigate = useNavigate();

  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(),
    username: Yup.string().min(3).max(13).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = async (data) => {
    const response = await axios.post('/auth/login', data);
    if (response.data.error) {
      alert(response.data.error);
    } else {
      sessionStorage.setItem("accessToken", response.data);
      navigate('/');
    }


    console.log(response.data);
  };

  return (
    <div className='flex flex-col md:flex-grow items-center justify-center px-6 py-8 md:h-full lg:py-0'>

      <div className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>

          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white flex items-center">
            Login <span className='ms-2 text-2xl text-sky-600 -scale-x-1'>B</span> Beraverse
          </h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className='space-y-4 md:space-y-6'>
              <div>
                <label htmlFor="username" className='block mb-2 text-sm font-medium text-white'>Username: </label>
                <Field //Username
                  id='inputCreatePost'
                  name='username'
                  type='text'
                  placeholder='username'
                  className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                />
                <ErrorMessage name='username' component={'span'} className='text-red-700 ms-1' />
              </div>

              <div>
                <label htmlFor="password" className='block mb-2 text-sm font-medium text-white'>Password: </label>
                <Field //Password
                  id='inputCreatePost'
                  name='password'
                  type='password'
                  placeholder='password'
                  className='border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                />
                <ErrorMessage name='password' component={'span'} className='text-red-700 ms-1' />
              </div>

              <div class="flex items-center">
                <button class="text-sm font-medium hover:underline text-blue-500">Forgot password?</button>
              </div>
              <button type="submit" class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Sign in</button>
              <p class="text-sm font-light text-gray-400">
                Don’t have an account yet?{" "}
                <button
                  onClick={() => {
                    navigate('/register');
                  }}
                  class="font-medium hover:underline text-blue-500"
                >
                  Register
                </button>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login;