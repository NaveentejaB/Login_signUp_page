import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useNavigate } from 'react-router-dom'
import Image from '/public/image.png'
import '/public/css/login.css'

const SignUp = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [signupDetails,setSignupDetails] = useState({
    fullName : '',
    email :'',
    password : ''
  })
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleInputChanges = (e) => {
    const {value,name} = e.target
    setSignupDetails({
      ...signupDetails,
      [name] : value
    })
  }
  const handleGoToLogin = () => {
    navigate('/login')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupDetails);
    // make post request to the backend
  }
  
  return (
    <div className="main_container">
        <div className="left_div">
          <div className="image_container">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="login_par_div">
            <div className="login_div">
                <div className="top">
                    <div className="heading">Create Account</div>
                    <div className="other_login_ways">
                        <div className="box">
                          <GoogleIcon sx={{color:'black'}}/>
                          <div className="text" >Sign up with Google </div>
                        </div>
                        <div className="box">
                          <FacebookIcon sx={{color:'black'}}/>
                          <div className="text">Sign up with Facebook </div>
                        </div>
                    </div>
                </div>
                <div className="middle">-OR-</div>
                <div className="bottom">
                  <div className="details_div">
                    <TextField  className='text_feild' name='fullName' value={signupDetails.fullName} onChange={handleInputChanges} id="standard-basic" label="Full Name" variant="standard"  InputProps={{style:{fontFamily:"Poppins",paddingLeft:'10px',color:'#A0A0A0'}}} InputLabelProps={{style:{fontFamily:"Poppins",paddingLeft:'10px',color:'#A0A0A0'}}}/>
                    <TextField  className='text_feild' type='email' name='email' value={signupDetails.email} onChange={handleInputChanges} id="standard-basic" label="Email Address" variant="standard" InputProps={{style:{fontFamily:"Poppins",paddingLeft:'10px',color:'#A0A0A0'}}} InputLabelProps={{style:{fontFamily:"Poppins",paddingLeft:'10px',color:'#A0A0A0'}}}/>
                    <FormControl className='text_feild' sx={{ m: 1 }} variant="standard">
                      <InputLabel sx={{fontFamily:"Poppins",paddingLeft:'10px',color:'#A0A0A0'}} htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        
                        onChange={handleInputChanges}
                        value={signupDetails.password}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              sx={{color:'#A0A0A0'}}
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }                    
                      />
                  </FormControl>
                  <Button className='auth_btn' variant="contained" onClick={handleSubmit}>Create Account</Button>
                  <div className="extra_text_div">
                      <div className="first_part">Already have an account?</div>
                      <div className="second_half" onClick={handleGoToLogin}>  Log in </div>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp