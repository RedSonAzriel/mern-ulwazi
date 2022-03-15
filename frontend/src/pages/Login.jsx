//Allows us to use component leave states since we are using form fields. Needs more research on the background of these imports. 
import {useState, useEffect} from 'react'
//Not using the FaUser for Login, instead using FaSignInAlt
import {FaSignInAlt} from 'react-icons/fa'


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

//Only need email password to Login
  const { email, password } = formData

//setting the form data to an object, obtaining the key as the name value.
  const onChange = () => {
    setFormData((prevState) => ({
      ...prevState,
      [Event.target.name]: Event.target.value, 
    }))
  }
//creating a function called onSubmit. e is the syntax for Handling Events in React.
  const onSubmit = (e) => {
    Event.preventDefault()
  }

  return (
  <>
    <section className='heading'>
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p> Start searching</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        
        <div className="form-group">
          <input 
            type="email" 
            className="form-control" 
            id='email' 
            name='email' 
            value={email} 
            placeholder='Enter your email' 
            onChange={onChange} 
          />
        </div>

        <div className="form-group">
          <input 
            type="password" 
            className="form-control" 
            id='password' 
            name='password' 
            value={password} 
            placeholder='Enter your password' 
            onChange={onChange} 
          />
        </div>

        <div className="form-group">
          <button type="submit" className='btn btn-block'>Submit</button></div>
      </form>
    </section>
  </>
  )
}

export default Login