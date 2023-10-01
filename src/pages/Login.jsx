import {Form, Link } from 'react-router-dom'

import { FormInput, SubmitBtn} from '../components'

const Login = () => {
  return (
    <section className='h-screen grid place-items-center'>
    <FormInput />
    <SubmitBtn />
    </section>
  )
}

export default Login