import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "context/Favorite";
import { Outlet } from "react-router-dom";
import styles from "./Base.module.css";


function Base() {
    return (
        <main className={styles.base}>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
}

export default Base;