import { useState } from "react";
import './userLoginStyles.css';

const UserLogin: any = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e: any) => {
        e.preventDefault();
        // console.log({email, password});
    };

    return (
        <div>
            <h2>Login to your account</h2>
            <br></br>
            <form onSubmit={login}>
                <label>Email:</label>
                <input className="input input__box"
                    value={email}
                    id='email'
                    type='text'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    />
                <br></br>
                <label>Password:</label>
                <input className="input input__box"
                    value={password}
                    id='password'
                    type='text'
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    />
                    <br></br>
                <button className="input_submit" type='submit'>Login</button>
                <button className="signup_btn" type='submit'>Sign up</button>
            </form>
        </div>
    );
}    

export default UserLogin;