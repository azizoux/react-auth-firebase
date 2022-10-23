import React, {useRef, useState, useContext} from 'react'
import {UserContext} from '../../context/UserContext'
import loadingGif from '../../icons/Loading_icon.gif'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const {signUp} = useContext(UserContext)
    const navigate = useNavigate()
    const [validation, setValidation] = useState("")
    const [loadingData, setLoadingData] = useState("")
    const inputs = useRef([])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const closeDialog = () => {
        let d = document.getElementById('signUpModal')
        d.style.display = "none"
        d.close()
    }

    const formRef = useRef()
    
    const handleForm = async (e) => {
        e.preventDefault()
        if(inputs.current[1].value.length < 6 || inputs.current[2].value.length < 6 ){
            setValidation("six (6) caracteres min pour les password")
            return
        }
        else if(inputs.current[1].value !== inputs.current[2].value){
            setValidation("Password do not match")
            return
        }
        try{
            setLoadingData(true)
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value
            )
            setLoadingData(false)
            formRef.current.reset()
            setValidation("")
            console.log("currentUser", cred);
            navigate("/private/private-home")
            closeDialog()
        }catch(err) {
            if(err.code === 'auth/email-already-in-use'){
                setValidation("Email already used")
            }
            if(err.code === 'auth/invalid-email'){
                setValidation("Invalid email adress")
            }
        }
    }

  return (
    <div className="modal fade" id="signUpModal" tabIndex="-1" aria-labelledby="signUpModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signUpModalLabel">S'enregistrer</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form ref={formRef} onSubmit={handleForm}
                        className="form-auth">
                            <div className="mb-3">
                                <label className='form-label' htmlFor="mail">Votre mail</label>
                                <input ref={addInputs} className='form-control' type="email" htmlFor="mail" required />
                            </div>
                            <div className="mb-3">
                                <label className='form-label' htmlFor="password">Votre mot de passe</label>
                                <input ref={addInputs} className='form-control' type="password"   id="password" required/>
                            </div>
                            <div className="mb-3">
                                <label className='form-label' htmlFor="confirmPassword">Confirmer votre mot de passe</label>
                                <input ref={addInputs} className='form-control' type="password"   id="confirmPassword" required/>
                            </div>
                            {!loadingData ? <p className="text-danger mt-1">{validation}</p>: <img src={loadingGif} style={{width: "60px", height: "60px"}} alt="cat"  /> } 
                            <button className="btn btn-primary mt-2" onclick={closeDialog}>S'enregistrer</button>
        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
