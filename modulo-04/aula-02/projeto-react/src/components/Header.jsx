import styles from './Header.module.css'
import logo from '../assets/logo.png'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logo} alt='logo da página.'/>
            <ul>
                <li><a href="#">Premiun</a></li>
                <li><a href="#">Ajuda</a></li>
                <li><a href="#">Baixar</a></li>
                <li><a href="#">Increver-se</a></li>
                <li><a href="#">Entrar</a></li>
            </ul>
        </header>
    )
}