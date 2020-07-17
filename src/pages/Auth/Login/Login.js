import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import './Login.scss'

import { pageVariants, pageTransition } from '../../../Components/animate/animation';
import * as actions from '../../../store/actions/Index';
import { data } from '../../../data/data';

function Login({ login }) {
   const [name, setName] = useState('')
   const [password, setPassword] = useState('')
   const whenSubmit = e => {
      e.preventDefault()
      const data = {
         email: name,
         password: password
      }
      login(data)
   }

   return (
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition} >
         <div className="row" aria-autocomplete="none">
            <div className="login">
               <h1>Login</h1>
               <form onSubmit={whenSubmit}>
                  <label htmlFor="">email</label>
                  <input onChange={e => {setName(e.target.value.trim())}} type="text" name="userName" placeholder="user name" />

                  <label htmlFor="">password</label>
                  <input onChange={e => {setPassword(e.target.value.trim())}} type="password" name="password" placeholder="password" />
                  <button type="submit">submit</button>
               </form>
            </div>
         </div>
      </motion.div>
   )
}

const mapDispatchToProps = dispatch => {
   return {
      login: data => dispatch(actions.login(data))
   }
}

export default connect(null, mapDispatchToProps)(Login);

