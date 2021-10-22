import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <NavLink className={style.navlink} to="/profile" activeClassName={style.selected}>Profile</NavLink>
            <NavLink className={style.navlink} to="/dialogs" activeClassName={style.selected}>Dialogs</NavLink>
            <NavLink className={style.navlink} to="/users" activeClassName={style.selected}>Users</NavLink>
            <NavLink className={style.navlink} to="/settings" activeClassName={style.selected}>Settings</NavLink>
        </div>
    )
}

export default Navbar