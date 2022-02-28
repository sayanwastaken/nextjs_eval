
import { withRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";


const Userdetails=(props)=>{
    let id=props.router.query.id;
    let [user, Setuser] = useState([]);

    useEffect(() => {
      axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
        Setuser(res.data.data);
      });
    }, []);
    console.log(user)

    return(
        <>
        <h1>first_name:{user.first_name}</h1>
        <h1>last_name:{user.last_name}</h1>
        <h1>email :{user.email}</h1>

        <button onClick={() => props.router.push('/')}>Goto Home</button>
        </>
    )
}

export default withRouter(Userdetails);