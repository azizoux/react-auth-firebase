import React from 'react'
import {Link} from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function NavBar() {

  const navigate = useNavigate()

  const logOut = async () => {
    try {
      await signOut(auth)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <nav className="navbar navbar-light bg-light px-4">
        <Link to='/' className='navbar-brand'>
          Auth-JS
        </Link>
        <div>
        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signInModal">
            Connexion
        </button>
        <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#signUpModal">
            S'enregistrer
        </button>
            <button 
              onClick={logOut}
              className='btn btn-outline-danger ms-2'>Deconnexion</button>
        </div>
    </nav>
  )
}
