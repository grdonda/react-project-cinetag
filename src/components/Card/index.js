
import { useFavoritesContext } from "context/Favorite";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavoriteOn from "./favorite-on.png";
import iconFavoriteOff from "./favorite.png";

export default function Card({ id, title, cardImg: image }) {

    const { favorites, addFavorite } = useFavoritesContext();
    const hasFavorite = favorites.some(item => item.id === id);
    const icone = hasFavorite ? iconFavoriteOn : iconFavoriteOff;

    return (
        <div className={styles.container}>
            <Link to={`/detalhes/${id}`} className={styles.link}>
                <img src={image} alt={title} className={styles.image} />
            </Link>
            <h2>{title}</h2>
            <img src={icone} alt="Favoritar" className={styles.icon} onClick={() => addFavorite({ id, title, cardImg: image })} />
        </div>
    )
}
