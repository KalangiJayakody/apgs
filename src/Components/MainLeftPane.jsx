import React from 'react'
import '../Styles/MainLeftPane.css'
import logo from '../Images/project logo.png'
import ButtonSet from './ButtonSet'



const MainLeftPane = () => {
  return (
    <div className='maindiv-left'>
        
        <img src={logo} />
        <ButtonSet/>
        

    </div>
  )
}

export default MainLeftPane
