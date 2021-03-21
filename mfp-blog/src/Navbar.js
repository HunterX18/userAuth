import {Link} from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
        <Link to='/'>Home</Link>
        <Link to='/Create'>Add Book</Link>
        </>
    )
}
export default Navbar;