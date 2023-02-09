import { useState } from "react";

const UserLogin: any = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e: any) => {
        e.preventDefault();
        // console.log({email, password});
    };

    // const [values, handleChange, handleSubmit] = useForm(login);


    return (
        <form onSubmit={login}>
            <label>Email:</label>
            <input
                value={email}
                id='email'
                type='text'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
                />
            <label>Password:</label>
            <input
                value={password}
                id='password'
                type='text'
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}
                />
            <button type='submit'>Login</button>
        </form>
    );
}    

export default UserLogin;