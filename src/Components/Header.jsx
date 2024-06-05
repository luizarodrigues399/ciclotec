import Logo from '../assets/logo.png'
import LogoMobile from '../assets/logoMobile.png'
import style from './Header.module.css'
import { FaBars, FaSquareXmark } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Header = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () =>{
        setSidebar(!sidebar)   
    }

    const hideSidebar = () =>{
        setSidebar(false); 
        window.scrollTo(0, 0);
    }

    const screenSize = window.matchMedia("(min-width: 768px)").matches;

    const visibility = screenSize ? style.visibility_visible : 
                                (sidebar ?  style.visibility_visible : style.visibility_hidden);

 
    return (
    <>
        <header className={`${style.header} ${style.sidebar} ${visibility}`}>
            
            <IconContext.Provider value={{ className : style.header_mobile_close }}>
                <FaSquareXmark onClick={showSidebar}/>
            </IconContext.Provider>

            <img src={LogoMobile} alt='logo' className={ `${style.header_img} ${style.header_mobile}`}/>

            <img src={Logo} alt='logo' className={ `${style.header_img} ${style.header_desktop}`}/>

            <nav className={style.navbar}>
                <ul className={style.navbar_ul}>
                    <li><Link onClick={hideSidebar} to='/'>Home</Link></li>
                        
                    <li><Link onClick={hideSidebar} to='/sobre'>Sobre</Link></li>

                    <li><Link onClick={hideSidebar} to='/servicos'>Servicos</Link></li>

                    <li><Link onClick={hideSidebar} to='/portfolio'>Portfolio</Link></li>

                    <li><Link onClick={hideSidebar} to='/galeriaFotos'>Galeria de Fotos</Link></li>
                </ul>
            </nav>
        </header>
        
        <div className={style.mobile_menu} onClick={showSidebar}>
            <IconContext.Provider  value={{ className : style.mobile_menu }}>
                    <FaBars />
            </IconContext.Provider>
        </div>
    </>
    )
}

export default Header