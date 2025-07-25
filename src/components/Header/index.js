import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import HeaderLink from "./HeaderLink";
import logo from "./logo.png";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="Logo" />
            </Link>
            <nav>
                <HeaderLink url="/">Home</HeaderLink>
                <HeaderLink url="/favoritos">Favoritos</HeaderLink>
            </nav>
        </header>
    );
}

export default Header;