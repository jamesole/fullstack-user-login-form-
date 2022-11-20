import React, {useState} from 'react';
import axios from 'axios';

export default function List (props) {

    const [clicked, setClicked] = useState(false);
    const [users, setUsers] = useState([]);

    async function list(e) {
        setClicked(!clicked);
        await axios.get("http://localhost:8000/user")
        .then((res) => setUsers(res.data));
    }

    async function ban(e) {
        await axios.delete(`http://localhost:8000/user/${e.target.value}`)
        .then((res) => console.log(res)).catch((error) => console.log(error));

        window.location.reload();
    
    }

    const mappedUsers = users.map(user => {
        const num = users.indexOf(user) + 1;
        return (
            <div className='middle'>
                <h3><i>User #{num}</i></h3>
                <li>Name: {user.name}</li>
                <li>Email: {user.email}</li>
                <li>Password: {user.password}</li>
                <button className='bland' value={user._id} onClick={ban}>BAN</button>
            </div>

        );
    })

    return (
        <div>
            <div className='listDiv'> 
                <button id='getUsers' type="button" value={clicked} onClick={list} className="btn btn-danger btn-md">See Users!</button>
            </div>
            
            {(clicked && (users.length > 0)) ? (<ul>{mappedUsers}</ul>) : null}
        </div>


    )
}
