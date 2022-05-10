import {Link }from 'react-router-dom'
import '../Components/Header.css'

function Header() {
    return(
        <div className="header-background">
            <button id="profile-link">
                <Link to="/profile">Profile</Link>
            </button>
        </div>
    )
}
export default Header;