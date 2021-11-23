import '../../App.css'
import {React, setState, useState, useEffect} from 'react'
import CardItem from '../CardItem'
import {Link} from 'react-router-dom';
// import { Button } from './Button';
import backgroundVideo from '../../videos/video-3.mp4'
import {Button} from '../Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';



import {Input,
        Snackbar,
        OutlinedInput,
        InputAdornment,
        InputLabel,
        IconButton,
        FormControl,
        TextField,
        Paper, 
        FormGroup } from '@material-ui/core';

export default function SignUpFormCreator(){
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [seconds, setSeconds] = useState(10);
    const [open, setOpen] = useState(false);
    
    function handleChange(value, event){
        if(value === "email")
            setEmail(event.target.value);
        else if(value === "password"){
            setPassword(event.target.value);
        }else if(value === "confirm password"){
            setConfirmPassword(event.target.value);
        }else if(value === "name"){
            setName(event.target.value)
        }else if(value === "surname"){
            setSurname(event.target.value)
        }
    }
    const handleClickShowPassword =()=> setShowPassword(!showPassword);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      useEffect(() => {
        if (seconds > 0) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            setSeconds('BOOOOM!');
        }
        });
    return (
        <div className="paper_body">
        <video autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4'/>
        </video>
            <div className="register_form">
                <form>
                    <FormControl className="form_control">
                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="name" className="label">
                                Name
                            </InputLabel>
                            <Input
                                name="name"
                                type="name"
                                autoComplete="name"
                                // className={classes.inputs}
                                disableUnderline={false}
                                onChange={(e)=>handleChange("name", e)}
                            />
                        </FormControl>
                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="surname" className="label">
                                Surname
                            </InputLabel>
                            <Input
                                name="surname"
                                type="Surname"
                                autoComplete="Surname"
                                // className={classes.inputs}
                                disableUnderline={false}
                                onChange={(e)=>handleChange("surname", e)}
                            />
                        </FormControl>
                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="email" className="label">
                                E-mail
                            </InputLabel>
                            <Input
                                name="email"            
                                type="email"
                                autoComplete="email"
                                // className={classes.inputs}
                                disableUnderline={false}
                                onChange={(e)=>handleChange("email", e)}/>
                        </FormControl>
                        <FormControl required fullWidth margin="normal">
                            <InputLabel htmlFor="password" className="label">Password</InputLabel>
                            <Input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => handleChange('password', e)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '25ch' }}>
                            <InputLabel htmlFor="confirm_password" className="label">Confirm Password</InputLabel>
                            <Input
                                id="confirm_password"
                                type={showConfirmPassword ? 'text' : 'password'}
                                value={confirmPassword}
                                onChange={(e) => handleChange('confirm password', e)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Confirm Password"/>
                        </FormControl>
                        <FormControl className="buttonControl">
                            {Button && <Button onClick={function(e){
                                setLoading(true)
                                setOpen(true)
                                setEmail('')
                                setName('')
                                setSurname('')
                                setPassword('')
                                setConfirmPassword('')
                                window.location.reload(true)
                            }} redirect="/sign-up-form-creator" buttonStyle='btn--outline'> REGISTER</Button>}
                            {loading && <Box sx={{ display: 'flex' }}>
                            </Box>
                            }
                            <Snackbar
                                open={open}
                                autoHideDuration={6000}
                                onClose={()=> setOpen(!open)}
                                message="Successfully Registered"
                            />
                        </FormControl>
                    </FormControl>      
                </form>
            </div>
        </div>
    );
}
