import { useFormik } from "formik";
import * as Yup from 'yup'

import Input from "./Components/Input";

import './styles/App.css'


const limitDate = new Date()
limitDate.setFullYear(limitDate.getFullYear() - 18)

const App = () =>{

  const formik=useFormik({
    initialValues:{
      email:'',
      firstname:'',
      lastname:'',
      username:'',
      password:'',
      confirmpassword:'',
      birthday:'',
      github:''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('email required').email('invalid email'),
      firstname: Yup.string().required('Firstname required'),
      lastname: Yup.string().required('Lastname required'),
      username: Yup.string().required('username required').min(4,'username too short'),
      password: Yup.string().required('password required').min(8,'password too short').matches( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&?*])(?=.{8,})/,'the password must have at least one upper case, one lower case, one number and one special character'),
      confirmpassword: Yup.string().required('password confirmation required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
      birthday: Yup.date().required('birthday required').max(limitDate, 'You must be 18 or older'),
      github: Yup.string().required('github required').url('github must be a url')
    }),
    onSubmit: values =>{
      console.log(values);
        setTimeout(()=>{
          formik.resetForm()
        },2000)
    }
  })

  return(
    <>

    <h1>User info</h1>

    <form onSubmit={formik.handleSubmit}>
      <Input
        type='email'
        name='email'
        placeholder='email...'
        value={formik.values.email}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.email}
      />

      <Input
        type='text'
        name='firstname'
        placeholder='firstname...'
        value={formik.values.firstname}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.firstname}
      />

      <Input
        type='text'
        name='lastname'
        placeholder='lastname...'
        value={formik.values.lastname}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.lastname}
      />

      <Input
        type='text'
        name='username'
        placeholder='username...'
        value={formik.values.username}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.username}
      />

      <Input
        type='password'
        name='password'
        placeholder='password...'
        value={formik.values.password}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.password}
      />

      <Input
        type='password'
        name='confirmpassword'
        placeholder='confirmpassword...'
        value={formik.values.confirmpassword}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.confirmpassword}
      />

      <Input
        type='date'
        name='birthday'
        placeholder='birthday...'
        value={formik.values.birthday}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.birthday}
      />

      <Input
        type='url'
        name='github'
        placeholder='github...'
        value={formik.values.github}
        handleChange={formik.handleChange}
        disabled={formik.isSubmitting}
        error={formik.errors.github}
      />

      <button type="submit" disabled={formik.isSubmitting}>Submit</button>
       
    </form>
    {formik.isSubmitting && <p>Succes submit</p>}
    </>
  )
}
export default App;
