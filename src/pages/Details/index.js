import Banner from "components/Banner";
import Title from "components/Title";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Details.module.css"; // Corrected import path
import NotFound from "pages/NotFound";

export default function Details() {

    const [video, setVideo] = useState();
    const params = useParams();

    const URL = `http://localhost:3001/videos?id=${params.id}`;
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(video => setVideo(...video));
    }, []);

    if(!video) {
        return <NotFound />;
    }

    return (
        <>
            <Banner image='player' />
            <Title>
                <h1>Detalhes do Filme</h1>
            </Title>
            <section style={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={`${video.titulo} - Trailer`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </section>
        </>
    );
}