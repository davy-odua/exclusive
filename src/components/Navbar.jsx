import '../index.css'
import { FaSearch } from "react-icons/fa";

function Navbar(){
    return(
        <>
        <div className="nav-bar">
            <h2>Exclusive</h2>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">SignUp</a></li>
                </ul>
            </nav>
            <div className='input-container'>
                <input type="text" placeholder="What are you looking for ? " />
                <FaSearch className="search-icon" />
            </div>
        </div>
        
        </>
    )
}

export default Navbar;