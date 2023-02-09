import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./Detail.css"

export default function BookForm() {

  return (
    <div className="book-form">
        <Box className='box' sx={{width: "100", height: "auto", backgroundColor: "#fff", borderTop: "4px solid #48cae4", padding: "1rem 2rem", margin: "2rem 0.5rem" }}>
            <h4 className='text-center'>ĐẶT TOUR</h4>
            <p>Quý khách vui lòng nhập thông tin liên hệ bên dưới</p>
            <p>Họ & tên<span style={{color: "red"}}>*</span></p>
            <TextField id="outlined-basic"variant="outlined" fullWidth="50%"/>
            <p>Số điện thoại<span style={{color: "red"}}>*</span></p>
            <TextField id="outlined-basic"variant="outlined" fullWidth="50%"/>
            <p>Email</p>
            <TextField id="outlined-basic"variant="outlined" fullWidth="50%"/>
            <p>Yêu cầu khác</p>
            <TextField id="outlined-basic"variant="outlined" fullWidth="50%"/>
            <button>Gửi yêu cầu</button>
        </Box>
    </div>
  )
}
