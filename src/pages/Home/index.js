import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

function Home() {

    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/videos")
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);


    return (
        <>
            <Banner image="home" />
            <Title>
                <h1>CineTag</h1>
            </Title>
            <section className={styles.container}>
                {videos.map(video => (
                    <Card key={video.id} id={video.id} title={video.titulo} cardImg={video.capa} />
                ))}
            </section>
        </>
    );
}
export default Home;