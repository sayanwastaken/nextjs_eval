import { withRouter } from "next/router";

const Homepage=(props)=>{

    return(
        <>
        <h1>Home page</h1>
        <button onClick={() => props.router.push('/users')}>Goto User</button>
        </>
    )
}

export default withRouter(Homepage);