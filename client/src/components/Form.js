import React, {useState} from 'react';
import axios from 'axios';
export default function Form(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function changedInput(e) {
        if (e.target.id === 'name') {
            setName(e.target.value)
        }
        else if (e.target.id === 'email') {
            setEmail(e.target.value)
        }
        else {
            setPassword(e.target.value);
        }
    }

    function submitted(e) {
        
        const user = {
            name: name,
            email: email,
            password: password
        }
        console.log(user);
        
        axios.post("http://localhost:8000/user", user).then((res) => console.log(res)).catch((error) => console.log(error));
    }

    return(
        <form onSubmit={submitted}>
            <h2>Register</h2>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={changedInput}placeholder="Enter name" value={name}/>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={changedInput}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={changedInput} value={password}/>
            </div>

            <button type="submit" id="submit" className="btn btn-danger">Submit</button>

            
        </form>
    );

}
