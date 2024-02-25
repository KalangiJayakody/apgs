import React from 'react'
import '../Styles/MainRightPane.css'
import { Box, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



const MainRightPane = () => {
  return (
    <div className='maindiv-right'>
      
      <div className='container' style={{margin:'40px 40px 40px auto'}}>    
        <Button  sx={{m:2, width:'100px', height:'50px',color:'black',fontWeight:'bold' }} startIcon={<ArrowBackIcon/>}>Home</Button>

      </div>

     
    </div>
  )
}

export default MainRightPane
