import React, { useState } from 'react';
import { connect } from 'react-redux'
import { motion } from 'framer-motion';
import './Signup.scss'

import { pageTransition, pageVariants } from '../../../Components/animate/animation';
import * as actions from '../../../store/actions/Index';

function Signup({ signup }) {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const whenSubmit = e => {
      e.preventDefault()
      const data = {
         firstName: firstName,
         lastName: lastName,
         email: email,
         password: password 
      }
      console.log(data)
      signup(data)
   };
   return (
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition} >
         <div className="row">
            <div className="signup">
               <h1>sign up</h1>
               <form onSubmit={whenSubmit}>
                  <label htmlFor="">first name</label>
                  <input onChange={e => {setFirstName(e.target.value.trim())}} name="firstName" placeholder="first name" />

                  <label htmlFor="">last name</label>
                  <input onChange={e => {setLastName(e.target.value.trim())}} type="text" name="lastName" placeholder="last name" />

                  <label htmlFor="">email</label>
                  <input onChange={e => {setEmail(e.target.value.trim())}} type="text" type="email" name="email" placeholder="email" />

                  <label htmlFor="">password</label>
                  <input onChange={e => {setPassword(e.target.value.trim())}} type="password" name="password" placeholder="password" />

                  <label htmlFor="">verify password</label>
                  <input type="password" name="verifyPassword" placeholder="verify password" />

                  <button type="submit">submit</button>
               </form>
            </div>
         </div>
      </motion.div>
   )
}

const mapDispatchToProps = dispatch => {
   return {
      signup: data => dispatch(actions.signup(data))
   }
}

export default connect(null, mapDispatchToProps)(Signup);
