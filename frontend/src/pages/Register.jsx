//Allows us to use component leave states since we are using form fields. Needs more research on the background of these imports. 
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '', //confirmation of password
  })

  const {name, email, password, password2 } = formData

  const onChange = () => {
    setFormData((prevState) => ({
      //setting the form data to an object, obtaining the key as the name value. e is the syntax for Handling Events in React.
      ...prevState,
      [Event.target.name]: Event.target.value, 
    }))
  }
  //creating a function called onSubmit. e is the syntax for Handling Events in React.
  const onSubmit = (Event) => {
    Event.preventDefault()
  }

  return (
  <>
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p> Please create an account</p>
    </section>

    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            id='name' 
            name='name' 
            value={name} 
            placeholder='Enter your name' 
            onChange={onChange} 
          />
        </div>

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
          <input 
            type="password" 
            className="form-control" 
            id='password2' 
            name='password2' 
            value={password2} 
            placeholder='Confirm your password' 
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

export default Register