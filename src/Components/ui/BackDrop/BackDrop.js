import React from 'react'
import classNames from 'classnames'
import './BackDrop.scss'
import { connect } from 'react-redux'

//action
import * as action from '../../../store/actions/Index';

function Modal({isOpen, isActive, toggleModal}) {
   let classes = classNames({
      modal: true,
      active: isOpen
   })

   return (
      <div onClick={toggleModal} className={classes}>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      isActive: state.uiRTR.isModalOpen
   }
}

const mapDispatchToProps = dispatch => {
   return {
      toggleModal: () => dispatch(action.toggleModal())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);