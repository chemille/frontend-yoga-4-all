import { useState } from "react";
import './userLoginStyles.css';
import {  useNavigate } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";

const UserLogin: any = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()

    const login = (e: any) => {
        e.preventDefault();
        navigate('/home')
    };

    // Visibility for password //
    const [values, setValues] = useState({
        password:"",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event:any) => {
        event.preventDefault();
    };
    
    const handlePasswordChange = (props: any) => (event:any) => {
        setValues({ ...values, [props]: event.target.value });
    };


    return (
        <div>
            <br></br>
            <br></br>
            <h2>Login to your account</h2>
            <br></br>
            <form onSubmit={login}>
                <label>Email:</label>
                <br></br>
                <input className="input input__box"
                    value={email}
                    id='email'
                    type='text'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    />
                <br></br>
                <label>Password:</label>
                <br></br>
                 <div className="flex">
                <input className="input input__box"
                    id='password'
                    type={values.showPassword ? "text" : "password"}
                    placeholder='Password'
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    />
                    
               
                    <span
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        <AiOutlineEye className="theEye" />
                    </span>
                    
                </div>
                    <br></br>

                <button className="input_submit" type='submit'>Login</button>
                <button className="signup_btn" type='submit'>Sign up</button>
            </form>
        </div>
    );
}    

export default UserLogin;