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

  const onChange = () => {}

  return (
  <>
    <section className='heading'>
      <h1>
        <FaUser /> Register
      </h1>
      <p> Please create an account</p>
    </section>

    <section className="form">
      <form>
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
      </form>
    </section>

  </>
  )
}

export default Register