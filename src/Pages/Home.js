import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'

export default function Home() {

  const {currentUser} = useContext(UserContext)

    return (
    <div className='container p-5'>
      <h1 className='display-3 text-dark'>
        {currentUser ? "Welcome you are logged on the platform" : "Hi, Sign In or Sign Up"}
      </h1>
    </div>
    )
}
