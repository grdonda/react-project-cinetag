import styles from './NotFound.module.css';

function NotFound() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>Desculpe, a página que você está procurando não existe.</p>
        </section>
    );
}

export default NotFound;