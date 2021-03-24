import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (
        <>
        <Link to='/'>Home</Link>
        <Link to='/Auth'>Authorised</Link>
        </>
    )
}

export default Navbar;