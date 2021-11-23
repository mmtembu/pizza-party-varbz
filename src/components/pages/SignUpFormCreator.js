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
// import { IPFS } from 'ipfs/src';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';
// import IPFS from 'ipfs'
// import OrbitDB from 'orbit-db';



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
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [buttonState, setButtonState] = useState(true);
    const IPFS = require('ipfs')
    const OrbitDB = require('orbit-db');
    var orbitdb = null

    
    useEffect( async()=>{
        try{
            const ipfsOptions = {repo: './ipfs',};
            const ipfs = await IPFS.create(ipfsOptions);
            
            orbitdb = await OrbitDB.createInstance(ipfs);
            const db = await orbitdb.keyvalue('first-database');
            console.log(db.address);
            
            }catch(exc){
                console.log(`This is the error continue with the program executionL ${exc}`);
            }
    })

    const dbConnection= async()=> {

        const db1 = await orbitdb.keyvalue('first-database')
        await db1.put('')
        
        // try{
        // const ipfsOptions = {repo: './ipfs',};
        // const ipfs = await IPFS.create(ipfsOptions);
        
        // const orbitdb = await OrbitDB.createInstance(ipfs);
        // const db = await orbitdb.keyvalue('first-database');
        // console.log(db.address);
        
        // }catch(exc){
        //     console.log(`This is the error continue with the program executionL ${exc}`);
        // }
    }

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
        setButtonState(
            name.length < 0 &&
            surname.length < 0 &&
            email.length < 0 &&
            password.length < 0 &&
            confirmPassword.length < 0
        );
        
    }
    const handleClickShowPassword =()=> setShowPassword(!showPassword);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const handleClickShowConfirmPassword =()=> setShowConfirmPassword(!showConfirmPassword);

    const handleMouseDownConfirmPassword = (event) => {
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
                                id="name"
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
                                id="name"
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
                                id="email"
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
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}
                                        edge="end">
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Confirm Password"/>
                        </FormControl>
                        <FormControl className="buttonControl">
                            {Button && <Button disabled={buttonState} onClick={function(e){
                                                        console.log(confirmPassword.length)
                                setLoading(true)
                                setOpen(true)
                                setEmail('')
                                setName('')
                                setSurname('')
                                setPassword('')
                                setConfirmPassword('')
                                dbConnection();
                                // window.location.reload(true)
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
