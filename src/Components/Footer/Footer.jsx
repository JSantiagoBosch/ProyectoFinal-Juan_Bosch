import NavbarComponent from '../Menu/Navbar/NavbarComponent'
import './Footer.css'
import { Link } from 'react-router-dom'



export default function Footer() {
    return (
        <>
            <footer>

                <div className="fondofooter">

                    <div className="logofooter">
                        <Link to={"https://facebook.com"}><img className="tamIco" src="/facebook-icon.png" alt="Logo de Facebook" /></Link>
                    </div>
                    <div className="logofooter">
                        <Link to={"https://instagram.com"}><img className="tamIco" src="/instagram-icon.png" alt="Logo de Instagram" /></Link>
                    </div>
                    <div className="logofooter">
                        <Link to={"https://linkedin.com"}><img className="tamIco" src="/linkedin-icon.png" alt="Logo de Linkedin" /></Link>
                    </div>
                    <div className="logofooter">
                        <Link to={"https://mail.google.com"}><img className="tamIco" src="/mail-icon.png" alt="Logo de E-Mail" /></Link>
                    </div>

                </div>

                <div>

                    <Link className='colorJubilus link' to={"/"}>
                        <img className='tamIco' src="/jubilus.ico" alt="jubilus" />
                        JuBILuS
                    </Link>

                    <div className="d-flex justify-content-center">
                        <NavbarComponent/>
                    </div>

                </div>

                <div>
                    <nav>
                        <ul className="navbar-nav mt-3 mb-3">

                            <li>
                                <Link className='link' to={'/#'}>Terminos y condiciones</Link>
                            </li>
                            <li>
                                <Link className='link' to={'/#'}>Politica de Privacidad</Link>
                            </li>
                            <li>
                                <Link className='link' to={'/#'}>Franquicias</Link>
                            </li>
                            <li>
                                <Link className='link' to={'/#'}>Tapintoyourbeer</Link>
                            </li>
                            <li>
                                <Link className='link' to={'/#'}>Informacion de la compania</Link>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div>
                    <span>
                        BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS. NO COMPARTA EL CONTENIDO CON MENORES.
                        2024 CERVEZA JUBILUS ©
                    </span>
                </div>

            </footer>

        </>
    )
}