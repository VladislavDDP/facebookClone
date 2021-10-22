import style from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.logo}><NavLink className={style.link} to='/'>Social Network</NavLink></div>
        </div>
    )
}

export default Header