import Banner from 'components/Banner';
import Card from 'components/Card';
import Title from 'components/Title';
import styles from './Favorite.module.css';
import { useFavoritesContext } from 'context/Favorite';

function Favorite() {
    const { favorites } = useFavoritesContext();
    return (
        <>
            <Banner image='favoritos' />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {
                    favorites.length > 0 ? (
                        favorites.map(favorite => (
                            <Card
                                key={favorite.id}
                                id={favorite.id}
                                title={favorite.title}
                                cardImg={favorite.cardImg}
                            />
                        ))
                    ) : (
                        <p className={styles.empty}>Nenhum favorito adicionado</p>
                    )
                }
            </section>

        </>
    )
}

export default Favorite;