import { useFormik } from "formik";
import * as Yup from 'yup'

import Input from "./Components/Input";

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
      password: Yup.string().required('password required').min(8,'password too short').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])$/,'the password must have at least one upper case, one lower case, one number and one special character'),
      confirmpassword: Yup.string().required('password confirmation required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
      birthday: Yup.date().required('birthday required').test("age", "You must be 18 or older", function(birthdate) {
        const cutoff = new Date();
        cutoff.setFullYear(cutoff.getFullYear() - 18);      
        return birthdate <= cutoff;
      }),
      github: Yup.string().required('github required').url('github must be a url')
    }),
    onSubmit: values =>{
      console.log(formik.errors);
      if(!formik.errors){
        console.log(values);
      }
    }
  })

  return(
    <form onSubmit={formik.handleSubmit}>
      <Input
        type='email'
        name='email'
        placeholder='email...'
        value={formik.values.email}
        handleChange={formik.handleChange}
        error={formik.errors.email}
      />

      <Input
        type='text'
        name='firstname'
        placeholder='firstname...'
        value={formik.values.firstname}
        handleChange={formik.handleChange}
        error={formik.errors.firstname}
      />

      <Input
        type='text'
        name='lastname'
        placeholder='lastname...'
        value={formik.values.lastname}
        handleChange={formik.handleChange}
        error={formik.errors.lastname}
      />

      <Input
        type='text'
        name='username'
        placeholder='username...'
        value={formik.values.username}
        handleChange={formik.handleChange}
        error={formik.errors.username}
      />

      <Input
        type='password'
        name='password'
        placeholder='password...'
        value={formik.values.password}
        handleChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Input
        type='password'
        name='confirmpassword'
        placeholder='confirmpassword...'
        value={formik.values.confirmpassword}
        handleChange={formik.handleChange}
        error={formik.errors.confirmpassword}
      />

      <Input
        type='date'
        name='birthday'
        placeholder='birthday...'
        value={formik.values.birthday}
        handleChange={formik.handleChange}
        error={formik.errors.birthday}
      />

      <Input
        type='url'
        name='github'
        placeholder='github...'
        value={formik.values.github}
        handleChange={formik.handleChange}
        error={formik.errors.github}
      />

      <button type="submit">Submit</button>
       
    </form>
  )
}
export default App;
