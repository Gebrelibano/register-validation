
import {  useState } from 'react';
import './App.css';
import Input from './component/page/Input';


 
function App() {

  const [values, setValues] = useState({
    Username :"",
    email :"",
    birthday :"",
    password :"",
    confirmpassword :""
  });

  const inputs=[
    {
      id :1,
      name:"username",
      type:"text",
      placeholder:"username",
      errorMessage:"username should be 3-16 and shouldn't any include special character!",
      pattern :"^[A-Za-z0-9]{3,16}$",
      label:"username",
      required: true,
    },
    {
      id :2,
      name:"email",
      type:"text",
      placeholder:"email",
      errorMessage:"It should be a valid email adress",
      label:"email",
      required: true,
    },
    {
      id :3,
      name:"birthday",
      type:"date",
      placeholder:"birthday",
      label:"birthday",
      required: true,
    },
    {
      id :4,
      name:"password",
      type:"text",
      placeholder:"password",
      errorMessage:"password should be 8-20 characters and include at least 1 letter, 1 numbbers and 1 special characters",
      label:"password",
      pattern:"(?=.*[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}",
      required: true,
    },
    {
      id :5,
      name:"confirm password",
      type:"text",
      placeholder :"confirm passwor",
      errorMessage:"passwords don't match!",
      label :"confirm password",
      required: true,
    }

  ]
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    
  }

  const onChange=(e)=>{
    setValues({...values, [e.target.name]: e.target.value });
  }
  
  return (
      <div className='App' >
       <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input)=>(

            <Input  key={input.id} {...input}  value={values[input.name]} onChange={onChange} />
            ))}
       
        <button>submit</button>
      </form>
      </div>
  
  );
}

export default App;
